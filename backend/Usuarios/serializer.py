from rest_framework import serializers
from django.contrib.auth import get_user_model
User=get_user_model()

class RegisterUserSerealizaer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['email','password','username','first_name','last_name']
    def create(self,validate_data):
        return User.objects.create(**validate_data)
    

class ShowUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["email","first_name","last_name","profile","username"]
            