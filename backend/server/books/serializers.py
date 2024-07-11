from rest_framework import serializers
from books.models import Book
from books.models import Profile


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'created', 'title', 'url', 'rating']