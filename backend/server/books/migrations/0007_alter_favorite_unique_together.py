# Generated by Django 5.0.7 on 2024-07-12 21:20

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0006_alter_favorite_options_remove_favorite_created'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='favorite',
            unique_together={('user', 'book')},
        ),
    ]
