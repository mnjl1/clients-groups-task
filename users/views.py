from tokenize import group
from urllib import response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Group,User
from .serializers import GroupSerializer, UserSerializer

from rest_framework.decorators import api_view, permission_classes

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
        {
            'Endpoint': '/groups/create/',
            'method': 'POST',
            'body': None,
            'description': 'Create group'
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


@api_view(['POST'])
def create_group(request):
    data = request.data
    group_name = data['group_name']
    description = data['description']
    group = Group.objects.create(group_name=group_name, description=description)
    serializer = GroupSerializer(group,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def create_user(request):
    data = request.data
    username = data['username']
    group = data['group']
    user = User.objects.create(username=username, group=group)
    serializer = UserSerializer(user, many=False)
    return Response(serializer)


@api_view(['PUT'])
def edit_user(request, pk):
    data = request.data
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def delete_user(request, pk):
    pass


@api_view(['DELETE'])
def delete_group(request, pk):
    pass