
from . import views

from django.urls import include, path

urlpatterns = [
    path('', views.index, name='index'),
    path('2/', views.index2, name='index2'),
    
    path('resume/', views.resume, name='resume'),
    path('contact/', views.contact, name='contact'),
    path('contactsubmit/', views.sendMessage, name='sendmessage'),
    path('contact/contactsubmit/', views.sendMessage, name='sendmessagec'),

]
