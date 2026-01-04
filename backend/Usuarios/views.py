from django.shortcuts import render
from Usuarios.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import RegisterUserSerealizaer
from rest_framework.permissions import IsAuthenticated,AllowAny
# Create your views here.
class RegisterView(APIView):
    permission_classes=[AllowAny]
    def post(self,request):
        sereliazer=RegisterUserSerealizaer(data=request.data)
        if(sereliazer.is_valid()):
            sereliazer.save()
            return Response({"message":"Usuario creado"},status=201)
        return Response(sereliazer.errors,status=400)

class Meview(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request):
        user=request.user
        return Response({
            "id":user.id,
            "username":user.username,
            "email":user.email,
            "profile":user.profile,
            "first_name":user.first_name,
            "last_name":user.last_name
        })   



    