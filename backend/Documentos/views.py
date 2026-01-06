from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DocumentosModel
from rest_framework.permissions import IsAuthenticated
import requests

# Create your views here.
SERVICE_IA_URL="http://127.0.0.1:8001"

def helloword(request):
    return HttpResponse("hola mundo")

class UploadDocumentView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        file=request.FILES.get('file')
        
        doc=DocumentosModel.objects.create(
            user=request.user,
            file=file
        )

        with open(doc.file.path,"rb") as f:
            response=requests.post(
                f"{SERVICE_IA_URL}/ingest",
                files={"file":f}
            )
        data=response.json()   
        #ingestar el pdf
        doc.document_id=data['document_id']
        doc.save()
        qa_response=requests.post(f"{SERVICE_IA_URL}/ask",params={
            "document_id":doc.document_id,
            "question":"dame un resumen de esta persona a que se dedica"
        })
        answer=qa_response.json().get('answer',"")
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