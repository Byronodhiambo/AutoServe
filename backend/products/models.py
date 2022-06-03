from email.mime import image
from itertools import product
from operator import mod
from django.db import models
from django.contrib.auth.models import User

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
    image = models.ImageField()
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







