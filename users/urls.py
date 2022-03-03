import imp
from os import name
from django.urls import path
from . import views

app_name = 'users'

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('users/', views.get_users_list, name='users-list'),
    path('users/create/', views.create_user, name='user-create'),
    path('users/<str:pk>/edit/', views.edit_user, name='user-edit'),
    path('groups/',views.get_groups_list, name='groups-list'),
    path('groups/create/',views.create_group, name='group-create'),
]