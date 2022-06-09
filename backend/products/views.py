from django.shortcuts import render
from .models import Products, Category
from .serializers  import ProductSerializer, CategorySerializer
# from rest_framework.viewsets import ReadOnlyModelViewset
from rest_framework import viewsets

# Create your views here.

class Products(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductSerializer
    queryset = Products.objects.all()

