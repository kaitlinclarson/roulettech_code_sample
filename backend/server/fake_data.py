import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','server.settings')

import django
django.setup()

import random
import decimal
import string
from books.models import Book

thumbnails = ["pg73979.jpg", "pg73980.jpg", "pg73981.jpg"]

def main():
    for counter in range(50):
        title = ''.join(random.choices(string.ascii_uppercase + string.digits, k=12))
        Book.objects.create(title=title, url=random.choice(thumbnails), rating=decimal.Decimal(random.randrange(0, 500))/100)

# call your main
if __name__ == "__main__":
    main()