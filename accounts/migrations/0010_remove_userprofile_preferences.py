# Generated by Django 2.2.6 on 2019-10-29 20:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_auto_20191029_1946'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='preferences',
        ),
    ]