from dashboard.viewsets import product_viewset, category_viewset, seller_viewset, company_viewset, order_viewset, \
    orderline_viewset
from rest_framework import routers


dashboard_router = routers.DefaultRouter()
dashboard_router.register(r'products', product_viewset.ProductViewSet, base_name='products')
dashboard_router.register(r'categories', category_viewset.CategoryiewSet, base_name='categories')
dashboard_router.register(r'sellers', seller_viewset.SellerViewSet, base_name='categories')
dashboard_router.register(r'companies', company_viewset.CompanyViewSet, base_name='categories')
dashboard_router.register(r'orders', order_viewset.OrderViewSet, base_name='categories')
dashboard_router.register(r'orderLines', orderline_viewset.OrderLineViewSet, base_name='categories')
