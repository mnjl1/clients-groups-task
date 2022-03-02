from dataclasses import fields
from pyexpat import model
from tokenize import group
from rest_framework.serializers import ModelSerializer
from .models import Group, User


class GroupSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class UserSerializer(ModelSerializer):
    group = GroupSerializer()
    class Meta:
        model = User
        fields = '__all__'