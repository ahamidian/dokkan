from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, CreateModelMixin, UpdateModelMixin, \
    DestroyModelMixin
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from accounting.models import Company
from dashboard.serializers import CompanyListSerializer, CompanySerializer


class CompanyViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin, CreateModelMixin, UpdateModelMixin,
                     DestroyModelMixin):
    queryset = Company.objects.all()
    permission_classes = [IsAdminUser]
    serializer_class = CompanyListSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]

    def get_serializer_class(self):
        if self.action == 'create' or self.action == 'update':
            return CompanySerializer
        return self.serializer_class

    @action(detail=False, methods=['get'])
    def meta_data(self, request):
        return Response({
            "config":{
                "editable": True,
                "creatable": True,
                "title": "شرکت ها",
                "single_item": "شرکت",
            },
            "columns": [
                {
                    "label": "نام کاربری",
                    "name": "username"
                }, {
                    "label": "نام",
                    "name": "name"
                },
            ],
            "fields": [
                {
                    "label": "نام کاربری",
                    "type": "text",
                    "name": "username"
                }, {
                    "label": "نام",
                    "type": "text",
                    "name": "name"
                }, {
                    "label": "رمز عبور",
                    "type": "password",
                    "name": "password"
                }
            ]})
