# Generated by Django 5.0.6 on 2024-06-02 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='category',
        ),
        migrations.RemoveField(
            model_name='note',
            name='is_protected',
        ),
        migrations.RemoveField(
            model_name='note',
            name='password',
        ),
        migrations.RemoveField(
            model_name='note',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='note',
            name='user',
        ),
        migrations.AlterField(
            model_name='note',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
