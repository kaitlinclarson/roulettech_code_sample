from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    url = models.CharField(max_length=256, blank=True, default='')
    rating = models.DecimalField()

    class Meta:
        ordering = ['created']


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ['user']