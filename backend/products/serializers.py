from dataclasses import fields
from pyexpat import model
from unicodedata import category
from .models import Products, Category
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
   category = CategorySerializer(many=True)
   
   class Meta:
        model = Products
        fields = '__all__'
        fields = ['id', 'name', 'price', 'image', 'desc', 'category', 'stock']
        omit = [ 'created', 'updated'] #cannot work with fields set to all

        # expandable_fields = {
        # 'category': CategorySerializer’
        # }

        expandable_fields = {
        'category': (CategorySerializer, {'many': True})
        }
        

