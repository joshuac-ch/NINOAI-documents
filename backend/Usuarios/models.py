from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    email=models.EmailField(unique=True)
    profile=models.ImageField(upload_to="users/",null=True,blank=True,default="users/hori.jpg")

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']
