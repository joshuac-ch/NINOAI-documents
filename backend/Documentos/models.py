from django.db import models
from django.conf import settings
# Create your models here.
class DocumentosModel(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,null=True,blank=True)
    file=models.FileField(upload_to="documents/",blank=True,null=True)
    text=models.TextField(blank=True)
    cover=models.ImageField(upload_to="covers/",blank=True,null=True)
    ask=models.TextField(blank=True)
    is_start=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)