from itertools import permutations
from django.shortcuts import render
from .models import Products, Category,Image
from .serializers  import ProductSerializer, CategorySerializer, ImageSerializer
# from rest_framework.viewsets import ReadOnlyModelViewset
from rest_framework import viewsets
from rest_flex_fields.views import FlexFieldsModelViewSet
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class Products(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductSerializer
    queryset = Products.objects.all()
    permutation_classes = [IsAuthenticated]

# Uploading image via api
class ImageViewSet(FlexFieldsModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()
