from django.db import models
from django.contrib.auth.models import Group


# Create your models here.
class Link(models.Model):
    url = models.CharField(max_length=512)
    name = models.CharField(max_length=64, null=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.url
