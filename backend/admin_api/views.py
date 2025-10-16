from django.shortcuts import render
from .models import Product ,Order

# Create your views here.
def home(request):
    total_products =Product.objects.count()
    total_orders=Order.objects.count()
    pending_orders=Order.objects.filter(status='Pending').count()
    context={
        'total_products':total_products,
        'total_orders':total_orders,
        'pending_orders':pending_orders,
    }
    return render(request,'admin_api/home.html',context)