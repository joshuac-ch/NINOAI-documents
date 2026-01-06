from django.db import models
from django.conf import settings
# Create your models here.
class DocumentosModel(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,null=True,blank=True)
    file=models.FileField(upload_to="documents/",blank=True,null=True)
    text=models.TextField(blank=True)
    created_at=models.DateTimeField(auto_now_add=True)