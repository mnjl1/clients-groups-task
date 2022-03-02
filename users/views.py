from urllib import response
from django.shortcuts import render
from rest_framework.response import Response
from .models import Group,User
from .serializers import GroupSerializer, UserSerializer

from rest_framework.decorators import api_view

from users import serializers

@api_view(['GET'])
def get_routes(request):
    routs = [
        {
            'Endpoint': '/users/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of users'
        },
    ]
    return Response(routs)


@api_view(['GET'])
def get_users_list(request):
    users = User.objects.all()
    serializer = (UserSerializer(users, many=True))
    response = [[serializer.data], ]
    return Response(response)


@api_view(['GET'])
def get_groups_list(request):
    groups = Group.objects.all()
    serializer = (GroupSerializer(groups, many=True))
    response = [[serializer.data], ]
    return Response(response)



