# Generated by Django 2.2.6 on 2019-10-29 13:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20191028_2117'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='avatar',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='name',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='preference1',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='preference2',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='preference3',
        ),
    ]
