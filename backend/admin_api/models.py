from django.db import models
from django.conf import settings
# Create your models here.

class Product(models.Model):
   name = models.CharField(max_length=100)
   description = models.TextField()
   price = models.DecimalField(max_digits=10, decimal_places=2)
   stock = models.IntegerField()
   image = models.ImageField(upload_to='products', blank=True, null=True)  # Removed leading slash

   def __str__(self):
      return self.name
class Order(models.Model):
      STATUS_CHOICES=[
         ('Pending','Pending'),
         ('Shipped','Shipped'),
         ('Delivered',"Delivered"),
      ]
      user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='admin_orders')
      product = models.ForeignKey(Product, on_delete=models.CASCADE)
      quantity = models.PositiveIntegerField(default=1)
      total_price = models.DecimalField(max_digits=10, decimal_places=2)
      status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
      ordered_at = models.DateTimeField(auto_now_add=True)

      def __str__(self):
         return f"Order #{self.id} by {self.user.username}"  