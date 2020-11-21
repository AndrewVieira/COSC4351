from django.urls import path

from . import views

urlpatterns = [
    path('api/links', views.links, name='links'),
]