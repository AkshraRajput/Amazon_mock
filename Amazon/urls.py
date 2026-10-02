from django.urls import path
from Amazon import views

urlpatterns = [
    path("", views.home, name="home"),
]

