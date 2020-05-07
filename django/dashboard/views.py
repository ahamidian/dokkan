import string
from datetime import datetime, timedelta
import random

from django.contrib.auth.decorators import user_passes_test
from django.db.models import Sum, Count
from django.http import JsonResponse
from django.utils import timezone
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import BasePermission

from accounting.models import Company, Seller, User
from accounting.serializers import TableDataSerializer
from main.models import Product
from shopping.models import Order, OrderLine
from django.db.models.functions import TruncDay


class IsAdminUserOrCompany(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and (request.user.is_superuser or request.user.is_company))


@api_view(['GET'])
@permission_classes([IsAdminUserOrCompany])
def dashboard_data(request):
    today = datetime.now(tz=timezone.utc).replace(hour=0, minute=0, second=0, microsecond=0)
    orders_by_dates = Order.objects.annotate(day=TruncDay('created_on', tzinfo=timezone.utc)).values("day").annotate(
        value=Count('id')).values('day', 'value')
    orders_by_dates = {x["day"]: x["value"] for x in orders_by_dates}

    sellers_by_dates = Seller.objects.annotate(day=TruncDay('user__date_joined', tzinfo=timezone.utc)).values(
        "day").annotate(value=Count('user_id')).values('day', 'value')
    sellers_by_dates = {x["day"]: x["value"] for x in sellers_by_dates}

    complete_order_dates = []
    for day in (today - timedelta(n) for n in range(30, 0, -1)):
        if day in orders_by_dates.keys():
            complete_order_dates.append({"day": day, "value": orders_by_dates[day]})
        else:
            complete_order_dates.append({"day": day, "value": 0})

    complete_seller_dates = []
    for day in (today - timedelta(n) for n in range(30, 0, -1)):
        if day in sellers_by_dates.keys():
            complete_seller_dates.append({"day": day, "value": sellers_by_dates[day]})
        else:
            complete_seller_dates.append({"day": day, "value": 0})

    return JsonResponse({
        "total_products": Product.objects.all().count(),
        "total_companies": Company.objects.all().count(),
        "total_sellers": Seller.objects.all().count(),
        "total_orders": Order.objects.all().count(),
        "total_orders_value": OrderLine.objects.all().aggregate(Sum('price'))["price__sum"],
        "order_data": complete_order_dates,
        "seller_data": complete_seller_dates,
    })


 #
    # for day in (today - timedelta(n) for n in range(30, 0, -1)):
    #     for j in range(random.randint(2, 5)):
    #         user = User.objects.create(
    #             is_seller=True,
    #             username="09" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=9)),
    #             first_name=''.join(random.choices(string.ascii_uppercase, k=random.randint(3, 8))),
    #             last_name=''.join(random.choices(string.ascii_uppercase, k=random.randint(3, 8))),
    #         )
    #         user.set_password("11111")
    #         user.save()
    #         Seller.objects.create(user=user, verification_code="11111", latitude=random.randint(44000, 45000) / 1000,
    #                               longitude=random.randint(44000, 45000) / 1000)
    #     for j in range(random.randint(10, 20)):
    #         products = Product.objects.filter(existStatus=1).order_by("?")
    #         order = Order.objects.create(owner=Seller.objects.all().order_by("?").first(),
    #                                      created_on=day)
    #         for i in range(random.randint(2, 5)):
    #             count = random.randint(1, 7)
    #             OrderLine.objects.create(product=products[i], amount=count, order=order,
    #                                      price=products[i].discounted_price * count)
