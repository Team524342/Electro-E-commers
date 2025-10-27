from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


# Create your models here.

#User
class User(models.Model):
    ROLE_CHOICES=(
        ('customer','Customer'),
        ('admin','Admin'),
    )
    user_id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=255)
    role=models.CharField(max_length=10,choices=ROLE_CHOICES,default='customer')
    def __str__(self):
        return f"{self.name}({self.role})"


# 1.category
class Category(models.Model):
    category_id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100,unique=True)
    def __str__(self):
        return self.name


# 2.Product Model
class Product(models.Model):
   product_id=models.AutoField(primary_key=True)
   category=models.ForeignKey(Category,on_delete=models.SET_NULL,null=True)
   name = models.CharField(max_length=100)
   description = models.TextField(blank=True,null=True)
   price = models.DecimalField(max_digits=10, decimal_places=2)
   stock = models.IntegerField(default=0)
   image = models.ImageField(upload_to='products', blank=True, null=True)  # Removed leading slash
 
   def __str__(self):
      return f"{self.name} ({self.category.name})"
   

   # 3. customer Profile
# class CustomerProfile(models.Model):
#     user=models.OneToOneField(User,on_delete=models.CASCADE)
#     phone=models.CharField(max_length=15,blank=True,null=True)
#     address=models.TextField(blank=True,null=True)
#     city=models.CharField(max_length=100,blank=True,null=True)
#     state=models.CharField(max_length=100,blank=True,null=True)
#     pincode=models.CharField(max_length=10,blank=True,null=True)
#     def __str__(self):
#         return self.user.username

# 4.Order Model
class Order(models.Model):
      STATUS_CHOICES=[
         ('Pending','Pending'),
         ('Shipped','Shipped'),
         ('Delivered',"Delivered"),
         ('Cancelled','Cancelled'),
      ]
      order_id=models.AutoField(primary_key=True)
      user = models.ForeignKey(User, on_delete=models.CASCADE)
      product = models.ForeignKey(Product, on_delete=models.CASCADE)
      # quantity = models.PositiveIntegerField(default=1)
      total_price = models.DecimalField(max_digits=10, decimal_places=2,default=0.00)
      payment_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
      ordered_at = models.DateTimeField(auto_now_add=True)

      def __str__(self):
         return f"Order #{self.order_id} by {self.user.name}"  
      

# 5. Order Item Model
class OrderItem (models.Model):
    id=models.AutoField(primary_key=True)
    order=models.ForeignKey(Order,on_delete=models.CASCADE,related_name='items')
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity=models.PositiveIntegerField(default=1)
    price=models.DecimalField(max_digits=10,decimal_places=2)
    def get_total_price(self):
        return self.quantity*self.price
    def __str__(self):
        return f"{self.product.name} X {self.quantity}"
    
   #  cart table
class Cart(models.Model):
    id=models.AutoField(primary_key=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity=models.IntegerField(default=1)
    def __str__(self):
        return f"{self.user.name}-{self.product.name} ({self.quantity})"
