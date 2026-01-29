from rest_framework import serializers
from django.contrib.auth import get_user_model
User=get_user_model()

class RegisterUserSerealizaer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['email','password','username','first_name','last_name']
    def create(self,validate_data):
        password=validate_data.pop("password")
        user=User.objects.create(**validate_data)
        user.set_password(password)
        user.save()
        return user
    

class ShowUserSerializer(serializers.ModelSerializer):
    profile=serializers.SerializerMethodField()
    class Meta:
        model=User
        fields=["email","first_name","last_name","profile","username"]
    def get_profile(self,obj):
        if obj.profile and hasattr(obj.profile,"url"):
            return obj.profile.url
        return None
class UpdateUserSerealizer(serializers.ModelSerializer):
    profile = serializers.ImageField(required=False, allow_null=True)
    class Meta:
        model=User
        fields=["username","first_name","last_name","profile"]
                
            