import csv
from http.client import HTTPResponse

from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, NumberFilter, BaseInFilter, CharFilter
from rest_framework.decorators import action
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, CreateModelMixin, UpdateModelMixin, \
    DestroyModelMixin
from rest_framework.permissions import BasePermission, AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from dashboard.serializers import ProductSerializer, ProductListSerializer
from main.models import Category, Product, Brand


class NumberInFilter(BaseInFilter, NumberFilter):
    pass


class ProductFilter(FilterSet):
    title = CharFilter(field_name="title", lookup_expr='contains')
    parent = NumberInFilter(field_name="parent", lookup_expr='in')
    brand = NumberInFilter(field_name="brand", lookup_expr='in')
    type = NumberInFilter(field_name="types", lookup_expr='in')
    min_price = NumberFilter(field_name="discounted_price", lookup_expr='gte')
    max_price = NumberFilter(field_name="discounted_price", lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['title', 'parent', "brand", "type", "min_price", "max_price"]


class IsAdminUserOrCompany(BasePermission):

    def has_permission(self, request, view):
        return bool(request.user and (request.user.is_superuser or request.user.is_company))

    def has_object_permission(self, request, view, obj):
        if request.user and request.user.is_superuser:
            return True
        return obj.brand.title == "Mihan"


class ProductViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin, CreateModelMixin, UpdateModelMixin,
                     DestroyModelMixin):
    queryset = Product.objects.all()
    permission_classes = [AllowAny]
    serializer_class = ProductListSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    filterset_class = ProductFilter
    search_fields = ['title']
    ordering_fields = ['discounted_price', 'price', "brand", "title", "parent", "existStatus"]

    def get_serializer_class(self):
        if self.action == 'retrieve' or self.action == 'create' or self.action == 'update':
            return ProductSerializer
        return self.serializer_class

    def get_queryset(self):
        if self.request.user.is_superuser:
            return self.queryset.all()
        return self.queryset.filter(brand__owner=self.request.user.company).all()

    def get_permitted_brands(self):
        if self.request.user.is_superuser:
            brands = Brand.objects.all()
        else:
            brands = Brand.objects.filter(owner=self.request.user.company).all()
        return [{"value": brand.id, "label": brand.fa_title} for brand in brands]

    def get_permitted_categories(self):
        return [{"value": category.id, "label": category.title} for category in
                Category.objects.filter(is_leaf=True).all()]

    @action(detail=False, methods=['get'])
    def export_csv(self, request):
        queryset = self.get_queryset()
        response = HttpResponse(content_type="text/csv")
        writer = csv.writer(response)
        writer.writerow(
            ["title", "price", "discounted_price", "image", "existStatus", "brand", "parent", "created_on",
             "company"])

        for item in queryset.values_list("title", "price", "discounted_price", "image", "existStatus", "brand__title",
                                         "parent__title", "created_on",
                                         "company__name"):
            writer.writerow(item)

        response['Content-Disposition'] = 'attachment; filename=products.csv'
        return response

    @action(detail=False, methods=['get'])
    def meta_data(self, request):
        brand_filter_options = [{"value": "", "label": "همه"}] + self.get_permitted_brands()
        cat_filter_options = [{"value": "", "label": "همه"}] + self.get_permitted_categories()

        return Response({
            "config": {
                "editable": True,
                "creatable": True,
                "title": "محصولات",
                "single_item": "کالا",
            },
            "columns": [
                {
                    "label": "نام",
                    "name": "title"
                }, {
                    "label": "قیمت",
                    "name": "price"
                }, {
                    "label": "قیمت با تخفیف",
                    "name": "discounted_price"
                }, {
                    "label": "برند",
                    "name": "brand"
                }, {
                    "label": "دسته بندی",
                    "name": "parent"
                }
            ],
            "fields": [
                {
                    "label": "نام",
                    "type": "text",
                    "name": "title"
                }, {
                    "label": "قیمت",
                    "type": "number",
                    "name": "price"
                }, {
                    "label": "قیمت با تخفیف",
                    "type": "number",
                    "name": "discounted_price"
                }, {
                    "label": "وضعیت موجودی",
                    "type": "select",
                    "options": [
                        {"value": 1, "label": 'existed'},
                        {"value": 2, "label": 'coming soon'},
                        {"value": 3, "label": 'out of stock'},
                    ],
                    "name": "existStatus"
                }, {
                    "label": "برند",
                    "type": "select",
                    "options": self.get_permitted_brands(),
                    "name": "brand"
                }, {
                    "label": "دسته بندی",
                    "type": "select",
                    "options": self.get_permitted_categories(),
                    "name": "parent"
                }, {
                    "label": "تصویر",
                    "type": "text",
                    "name": "image"
                }
            ],
            "filters": [
                {
                    "label": "نام",
                    "type": "text",
                    "name": "title"
                }, {
                    "label": "برند",
                    "type": "select",
                    "options": brand_filter_options,
                    "default": brand_filter_options[0],
                    "name": "brand"
                }, {
                    "label": "دسته بندی",
                    "type": "select",
                    "options": cat_filter_options,
                    "default": cat_filter_options[0],
                    "name": "parent"
                },
            ],
            "bulk_edit": [
                {
                    "label": "وضعیت موجودی",
                    "type": "select",
                    "options": [
                        {"value": 1, "label": 'existed'},
                        {"value": 2, "label": 'coming soon'},
                        {"value": 3, "label": 'out of stock'},
                    ],
                    "name": "existStatus"
                }, {
                    "label": "برند",
                    "type": "select",
                    "options": self.get_permitted_brands(),
                    "name": "brand"
                }, {
                    "label": "دسته بندی",
                    "type": "select",
                    "options": self.get_permitted_categories(),
                    "name": "parent"
                },
            ]

        })
