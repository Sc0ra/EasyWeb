# Generated by Django 2.0.6 on 2018-06-13 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('easysensor', '0003_auto_20180613_1213'),
    ]

    operations = [
        migrations.AlterField(
            model_name='easysensor',
            name='device_id',
            field=models.IntegerField(unique=True),
        ),
    ]
