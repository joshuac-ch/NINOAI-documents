from django.shortcuts import render
from Usuarios.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import RegisterUserSerealizaer
# Create your views here.
class RegisterView(APIView):
    permission_classes=[]

    def post(self,request):
        sereliazer=RegisterUserSerealizaer(data=request.data)
        if(sereliazer.is_valid()):
            sereliazer.save()
            return Response({"message":"Usuario creado"},status=201)
        return Response(sereliazer.errors,status=400)

    