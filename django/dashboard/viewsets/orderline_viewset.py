from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter
from rest_framework.mixins import ListModelMixin
from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from dashboard.serializers import OrderLineSerializer
from shopping.models import OrderLine


class IsAdminUserOrCompany(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and (request.user.is_superuser or request.user.is_company))


class OrderLineViewSet(GenericViewSet, ListModelMixin):
    queryset = OrderLine.objects.all()
    permission_classes = [IsAdminUserOrCompany]
    serializer_class = OrderLineSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]

    def get_queryset(self):
        if self.request.user.is_superuser:
            return self.queryset.all()
        return self.queryset.filter(product__brand__owner=self.request.user.company).all()

    @action(detail=False, methods=['get'])
    def meta_data(self, request):
        return Response({
            "config": {
                "editable": False,
                "creatable": False,
                "title": "سفارش ها",
                "single_item": "سفارش",
            },
            "columns": [
                {
                    "label": "کالا",
                    "name": "product"
                }, {
                    "label": "تعداد",
                    "name": "amount"
                }, {
                    "label": "قیمت",
                    "name": "price"
                }, {
                    "label": "خریدار",
                    "name": "owner"
                }, {
                    "label": "تاریخ",
                    "name": "created_on"
                }, {
                    "label": "وضعیت",
                    "name": "status"
                }
            ]})
