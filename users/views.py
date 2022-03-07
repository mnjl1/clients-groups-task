from django.shortcuts import redirect
from rest_framework.response import Response
from .models import Group,User
from .serializers import GroupSerializer, UserSerializer

from rest_framework.decorators import api_view

from users import serializers


@api_view(['GET'])
def get_users_list(request):
    users = User.objects.all()
    serializer = (UserSerializer(users, many=True))
    response = [[serializer.data], ]
    return Response(response)


@api_view(['POST'])
def create_user(request):
    data = request.data
    username = data['username']
    group = data.group
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


@api_view(['POST'])
def delete_user(request, pk):
    user = User.objects.get(id=pk)
    user.delete()
    return redirect('http://localhost:3000/users/')


@api_view(['GET'])
def get_group(request, pk):
    group = Group.objects.get(id=pk)
    serializer = GroupSerializer(group, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_groups_list(request):
    groups = Group.objects.all()
    serializer = (GroupSerializer(groups, many=True))
    response = [[serializer.data], ]
    return Response(response)


@api_view(['POST'])
def create_group(request):
    data = request.data
    print(data)
    group_name = data['group_name']
    description = data['description']
    group = Group.objects.create(group_name=group_name, description=description)
    serializer = GroupSerializer(group,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def delete_group(request, pk):
    group = Group.objects.get(id=pk)
    if len(group.user_set.all()) == 0:
        group.delete()
        return redirect('http://localhost:3000/groups')
    else:
        return Response('Cannot delete. Group is not empty!')


@api_view(['POST'])
def edit_group(request, pk):
    data = request.data
    group = Group.objects.get(id=pk)
    serializer = GroupSerializer(instance=group, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)