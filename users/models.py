from django.db import models


class Group(models.Model):
    group_name = models.CharField(blank=False, max_length=255)
    description = models.CharField(blank=False, max_length=255)

    def __str__(self ):
        return self.group_name


class User(models.Model):
    username = models.CharField(blank=False, max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, blank=True)

    def __str__(self) -> str:
        return self.username