from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    url = models.CharField(max_length=256, blank=True, default='')
    rating = models.DecimalField(decimal_places=2, max_digits=3, blank=True, default=0)

    class Meta:
        ordering = ['created']


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    favorite = models.BooleanField(blank=True, default=False)
    
    class Meta:
        unique_together = ('user', 'book',)