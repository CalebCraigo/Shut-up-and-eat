# Generated by Django 2.2.6 on 2019-10-29 13:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_profilecreateview'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ProfileCreateView',
            new_name='UserProfile',
        ),
    ]
