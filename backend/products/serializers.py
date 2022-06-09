from dataclasses import fields
from pyexpat import model
from unicodedata import category
from .models import Products, Category, Image
from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'name']



class ImageSerializer(VersatileImageFieldSerializer):
    image = VersatileImageFieldSerializer(
        sizes = [
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__100x100'),
        ]
    )

    class Meta:
        model = Image
        fields = ['pk', 'name', 'image']



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


        # http://127.0.0.1:8000/product/3/?expand=image&omit=content
        expandable_fields = {
        # 'category': (CategorySerializer, {'many': True}),
        'image' : (ImageSerializer, {'many': True})
        }



