from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from books.models import Book
from books.models import Favorite
from books.serializers import BookSerializer
from books.serializers import FavoriteSerializer
from books.serializers import FavoriteRequestSerializer
from django.db.models import Value, BooleanField


@api_view(['GET'])
def book_list(request):
    queryset = Book.objects.all()
    serializer = BookSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
def favorite_list(request):
    if request.user.is_authenticated:
        queryset = Favorite.objects.all().filter(user=request.user)
        serializer = FavoriteSerializer(queryset, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
def add_favorite(request):
    if request.user.is_authenticated:
        user = Token.objects.get(key=request.auth.key).user
        book = Book.objects.get(title=request.data["title"])
        try:
            favorite = Favorite.objects.get(user=user, book=book)
            favorite.delete()
        except Favorite.DoesNotExist:
            Favorite.objects.update_or_create(user=user, book=book, favorite=request.data["favorite"])
        return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)