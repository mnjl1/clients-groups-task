# Generated by Django 4.0.3 on 2022-03-07 12:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='group',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='users.group'),
        ),
    ]