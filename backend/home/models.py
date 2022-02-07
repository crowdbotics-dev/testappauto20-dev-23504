from django.conf import settings
from django.db import models


class Home(models.Model):
    "Generated Model"
    address = models.BigIntegerField()
