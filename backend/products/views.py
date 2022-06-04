from django.shortcuts import render

from AutoServe.backend.products.serializers import CategorySerializer, ProductSerializer
from .models import Products, Category
from .serializersProductSerializer,  import ProductSerializer, CategorySerializer
from rest_framework.viewsets import ReadOnlyModelViewset

# Create your views here.

class Products(ReadOnlyModelViewset):

    serializer_class = ProductSerializer
    queryset = Products.objects.all()

