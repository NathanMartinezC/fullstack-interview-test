from django.db import models

# Create your models here.
class PullRequest(models.Model):

    STATUS_CHOICES = [
        ('O', 'Open'),
        ('C', 'Closed'),
        ('M', 'Merged')
    ]

    author = models.CharField(max_length=256)
    title = models.CharField(max_length=256)
    base_branch = models.CharField(max_length=256)
    compare_branch = models.CharField(max_length=256)
    description = models.CharField(max_length=256)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='O')
