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
    print(data)
    group_name = data['group_name']
    description = data['description']
    group = Group.objects.create(group_name=group_name, description=description)
    serializer = GroupSerializer(group,many=False)
    return Response(serializer.data)



