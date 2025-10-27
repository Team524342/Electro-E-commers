from django.shortcuts import render
from rest_framework import viewsets
from .models import Product ,Order,Cart,Category,OrderItem,User
from .serializers import (UserSerailizer,CategorySerializer,ProductSerializer,
                          OrderItemSerializer,OrderSerializer,CartSerailizer)

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerailizer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset=OrderItem.objects.all()
    serializer_class=OrderItemSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset=Cart.objects.all()
    serializer_class=CartSerailizer            
