from django.urls import path
from . import views

app_name = 'easyweb'
urlpatterns = [
    path('', views.index, name='index'),
]
