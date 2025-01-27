# Generated by Django 3.0.8 on 2021-07-04 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PullRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=256)),
                ('title', models.CharField(max_length=256)),
                ('base_branch', models.CharField(max_length=256)),
                ('compare_branch', models.CharField(max_length=256)),
                ('description', models.CharField(max_length=256)),
                ('status', models.CharField(choices=[('O', 'Open'), ('C', 'Closed'), ('M', 'Merged')], default='O', max_length=1)),
            ],
        ),
    ]
