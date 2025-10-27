from rest_framework import serializers
from .models import User,Category,Cart,Order,OrderItem,Product

# ?user
class UserSerailizer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['user_id','name','email','password','role']
        extra_kwargs={'password':{'write_only':True}}


# category
class CategorySerializer(serializers.ModelSerializer) :
    class Meta:
        model=Category
        fields='__all__'  

# Product
class ProductSerializer(serializers.ModelSerializer):
    category_name=serializers.CharField(source="category.name",read_only=True)
    class Meta:
        model=Product
        field=['product_id','name','descripton','price','stock','category','category_name','image']


# orderitem
class OrderItemSerializer(serializers.ModelSerializer):
    product_name=serializers.CharField(source="product.name",read_only=True)
    class Meta:
        model=OrderItem
        fields=['id','order','product','product_name','quanttiy','price']



# order
class OrderSerializer(serializers.ModelSerializer):
    items=OrderItemSerializer(many=True,read_only=True)
    user_name=serializers.CharField(source='user.name',read_only=True)
    class Meta:
        model=Order
        fields=['order_id','user','user_name','total_amount','order_date','payment_status','items'

        ]




# cart
class CartSerailizer(serializers.ModelSerializer):
    product_name=serializers.CharField(source='product.name',read_only=True)
    product_price=serializers.DecimalField(source='product.price',max_digits=10,decimal_places=2,read_only=True)
    class Mete:
        model=Cart
        fields=['id','user','product','product_name','product_price','quantity ']