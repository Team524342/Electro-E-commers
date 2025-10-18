from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RegisterView,
    CategoryViewSet,
    ProductViewSet,
    CartView,
    PlaceOrderView,
    CreateOrderAPIView,
)

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('cart/', CartView.as_view(), name='cart'),
    path('place-order/', PlaceOrderView.as_view(), name='place-order'),
    path('create-order/', CreateOrderAPIView.as_view(), name='create-order'),
    path('', include(router.urls)),
]
