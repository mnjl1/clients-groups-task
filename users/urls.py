import imp
from os import name
from django.urls import path
from . import views

app_name = 'users'

urlpatterns = [
    path('users/', views.get_users_list, name='users-list'),
    path('users/create/', views.create_user, name='user-create'),
    path('users/<str:pk>/edit/', views.edit_user, name='user-edit'),
    path('users/<str:pk>/delete', views.delete_user, name='user-delete'),
    path('groups/',views.get_groups_list, name='groups-list'),
    path('groups/create/',views.create_group, name='group-create'),
    path('gorups/<str:pk>/edit/', views.edit_group,name='group-edit'),
    path('groups/<str:pk>/delete/', views.delete_group, name='group-delete')
]