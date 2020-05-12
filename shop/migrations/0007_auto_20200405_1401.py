# Generated by Django 2.2.10 on 2020-04-05 12:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_auto_20200404_0022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='username',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='address', to=settings.AUTH_USER_MODEL),
        ),
    ]
