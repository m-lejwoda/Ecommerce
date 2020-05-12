# Generated by Django 2.2.10 on 2020-04-14 05:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0009_auto_20200413_1916'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='title',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.Item'),
        ),
        migrations.AlterField(
            model_name='rating',
            name='username',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to=settings.AUTH_USER_MODEL),
        ),
    ]
