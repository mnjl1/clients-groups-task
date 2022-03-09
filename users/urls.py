import imp
from os import name
from django.urls import path
from . import views

app_name = 'users'

urlpatterns = [
    path('users/', views.get_users_list, name='users-list'),
    path('users/<str:pk>/', views.get_user, name='get-user'),
    path('create/user/', views.create_user, name='user-create'),
    path('users/<str:pk>/edit/', views.edit_user, name='user-edit'),
    path('users/<str:pk>/delete/', views.delete_user, name='user-delete'),
    path('groups/',views.get_groups_list, name='groups-list'),
    path('groups/<str:pk>/', views.get_group, name='get-group'),
    path('create/group/', views.create_group, name='group-create'),
    path('groups/<str:pk>/edit/', views.edit_group,name='group-edit'),
    path('groups/<str:pk>/delete/', views.delete_group, name='group-delete')
]