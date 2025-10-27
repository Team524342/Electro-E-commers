from django.urls import path ,include
from rest_framework.routers import DefaultRouter
from .views import (UserViewSet,CategoryViewSet,ProductViewSet,OrderViewSet,OrderItemViewSet,CartViewSet)

from .import views

router=DefaultRouter()
router.register('user',UserViewSet)
router.register('categories',CategoryViewSet)
router.register('products',ProductViewSet)
router.register('orders',OrderViewSet )
router.register('order-item',OrderItemViewSet)
router.register('cart',CartViewSet)


urlpatterns=[
  
    path('/api',include(router.urls)),
]