from django_filters.rest_framework import DjangoFilterBackend, FilterSet, CharFilter
from rest_framework.decorators import action
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, CreateModelMixin, UpdateModelMixin, \
    DestroyModelMixin
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from dashboard.serializers import CategorySerializer, CategoryListSerializer
from dashboard.viewsets.product_viewset import NumberInFilter
from main.models import Category


class CategoryFilter(FilterSet):
    title = CharFilter(field_name="title", lookup_expr='contains')
    parent = NumberInFilter(field_name="parent", lookup_expr='in')

    class Meta:
        model = Category
        fields = ['title', 'parent']


class CategoryiewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin, CreateModelMixin, UpdateModelMixin,
                     DestroyModelMixin):
    queryset = Category.objects.all()
    permission_classes = [IsAdminUser]
    serializer_class = CategoryListSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    search_fields = ['title']
    ordering_fields = ['title', "parent", "level"]
    filterset_class = CategoryFilter

    def get_serializer_class(self):
        if self.action == 'retrieve' or self.action == 'create' or self.action == 'update':
            return CategorySerializer
        return self.serializer_class

    @action(detail=False, methods=['get'])
    def meta_data(self, request):
        return Response({
            "config": {
                "editable": True,
                "creatable": True,
                "title": "دسته بندی ها",
                "single_item": "دسته بندی",
            },
            "columns": [
                {
                    "label": "نام",
                    "name": "title"
                }, {
                    "label": "دسته بندی",
                    "name": "parent"
                }, {
                    "label": "سطح",
                    "name": "level"
                }
            ],
            "fields": [
                {
                    "label": "نام",
                    "type": "text",
                    "name": "title"
                }, {
                    "label": "دسته",
                    "type": "select",
                    "options": [{"value": category.id, "label": category.title} for category in
                                Category.objects.filter(is_leaf=False)],
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
                    "label": "دسته بندی",
                    "type": "select",
                    "options": [{"value": category.id, "label": category.title} for category in
                                Category.objects.filter(is_leaf=False)],
                    "name": "parent"
                },
            ]})
