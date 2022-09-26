from django.urls import path
from . import views
urlpatterns = [
    path('', views.appFormCreate, name="appFormCreate"),
    path('list/', views.appFormList, name="appFormList"),
    path('detail/<str:pk>/', views.appFormDetail, name="appFormDetail"),
    path('update/<str:pk>/', views.appFormUpdate, name="appFormUpdate"),
    path('delete/<str:pk>/', views.appFormDelete, name="appFormDelete"),
]