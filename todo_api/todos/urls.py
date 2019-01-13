# todos/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('<int:pk>/', views.DetailTodo.as_view()),
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view())
]