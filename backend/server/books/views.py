from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from books.models import Book
from books.serializers import BookSerializer


@api_view(['GET'])
def book_list(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)