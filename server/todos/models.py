from django.db import models

# Create your models here.
class Todo(models.Model):
    id = models.AutoField
    title = models.CharField(max_length=512)
    is_completed = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    created_at= models.DateTimeField(auto_now_add=True)