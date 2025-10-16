from django.contrib import admin
from .models import Product, Order 
# Register your models here.

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock')  # Removed created_at as it's not in model
    search_fields = ('name',)  # Fixed tuple syntax
    list_filter = ('stock',)  # Changed from created_at to stock

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'quantity', 'total_price', 'status', 'ordered_at')  # Fixed ordered_at field name
    list_filter = ('status',)  # Fixed tuple syntax
    search_fields = ('user__username', 'product__name')
