# Generated by Django 2.2.8 on 2020-02-13 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_auto_20200213_0024'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepagesegment',
            name='position',
            field=models.SmallIntegerField(blank=True),
        ),
    ]
