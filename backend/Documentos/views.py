from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DocumentosModel
from rest_framework.permissions import IsAuthenticated
import requests
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serealizer import DocumentSerealizer,DocuemntStartSerealizer
# Create your views here.
SERVICE_IA_URL="http://127.0.0.1:8001"

def helloword(request):
    return HttpResponse("hola mundo")

class UploadDocumentView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        file=request.FILES.get('file')
        ask=request.data.get('pregunta')
        doc=DocumentosModel.objects.create(
            user=request.user,
            file=file,
            ask=ask            
        )
        #enviar el documento al modelo
        with open(doc.file.path,"rb") as f:
            response=requests.post(
                f"{SERVICE_IA_URL}/ingest",
                files={"file":f}
            )
        data=response.json()   
        #ingestar el pdf
        doc.document_id=data['document_id']
        
        #preguntar al modelo lo que buscar
        qa_response=requests.post(f"{SERVICE_IA_URL}/ask",params={
            "document_id":doc.document_id,
            "question":ask
        })
        answer=qa_response.json().get('answer',"")
        #guardar respuesta
        doc.text=answer
        doc.save()
        return Response({
            "id":doc.id,
            "document_id":doc.document_id,
            "answer":answer,
            "message":"documento subido exitosamente"
        })

class AskDocument(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        document_id=request.data["document_id"]
        question=request.data["question"]
        response=requests.post(f"{SERVICE_IA_URL}/ask",params={
            "document_id":document_id,
            "question":question
        })
        return Response(response.json())    

class MyDocument(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self,request):
        docs=DocumentosModel.objects.filter(user=request.user).order_by("created_at")
        serealizer=DocumentSerealizer(
            docs,many=True,context={"request":request}
        ) 
        return Response(serealizer.data)


class UpdateStartMDocument(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request,id):
        doc=get_object_or_404(DocumentosModel,id=id,user=request.user)
        doc.is_start=not doc.is_start
        doc.save()      
        return Response({"id":doc.id,"is_star":doc.is_start})

class StartDocumentGet(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request):
        doc=DocumentosModel.objects.filter(
            user=request.user,
            is_start=True)
        serealizer=DocuemntStartSerealizer(doc,many=True,context={"request":request})
        return Response(serealizer.data,status=200)    