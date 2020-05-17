from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
