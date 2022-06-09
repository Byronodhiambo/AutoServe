from email.mime import image
from itertools import product
from operator import mod
from pyexpat import model
from django.db import models
from django.contrib.auth.models import User
from versatileimagefield.fields import VersatileImageField, PPOIField

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class Products(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    desc = models.TextField()
    # long_desc = models.CharField(max_length=400)
    category = models.ManyToManyField(Category, related_name='products', related_query_name='products')
    # relation between Product and Image
    image = models.ManyToManyField('products.Image', related_name= 'products')
    stock = models.IntegerField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    class Meta:
        ordering = ['-created']

    def __str__(self) -> str:
        return self.name

class Cart(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='cart', related_query_name='cart')
    qty = models.IntegerField()
    amt = models.IntegerField()

class Orders(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders', related_query_name='orders')
    order_amt = models.IntegerField()


class Image(models.Model):
    name =  models.CharField(max_length=100)
    image = VersatileImageField(
        'Image',
        upload_to = 'images/',
        ppoi_field = 'image_ppoi'
    )
    image_ppoi = PPOIField()

    def __str__(self):
        return self.name







