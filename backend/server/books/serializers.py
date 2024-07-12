from rest_framework import serializers
from books.models import Book
from books.models import Favorite


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'created', 'title', 'url', 'rating']


class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'book', 'favorite']


class FavoriteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['title', 'favorite']