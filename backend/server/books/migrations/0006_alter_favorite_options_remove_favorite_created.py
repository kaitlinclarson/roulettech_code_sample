# Generated by Django 5.0.7 on 2024-07-12 21:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0005_remove_book_favorite_favorite'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='favorite',
            options={},
        ),
        migrations.RemoveField(
            model_name='favorite',
            name='created',
        ),
    ]