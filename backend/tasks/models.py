from django.db import models

from common.models import BaseModel

class Task(BaseModel):
    title = models.CharField(max_length=100)
    description = models.CharField()
    updated_at = models.DateTimeField(auto_now=True)
