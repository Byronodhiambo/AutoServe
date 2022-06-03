from django.contrib import admin
from .models import Products, Category, Orders, Cart
from django.contrib.auth.models import Group
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price', 'desc', 'price', 'stock']
    list_filter = ['category']

admin.site.site_header = "Product admin"

admin.site.register(Products, ProductAdmin)
admin.site.register(Category)
admin.site.register(Orders)
admin.site.register(Cart)

admin.site.unregister(Group)
