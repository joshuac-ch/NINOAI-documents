from django.urls import path
from .views import helloword,UploadDocumentView
from .documentserializer import DocumentView

urlpatterns = [
    path('documentos/',helloword),    
    path("documentos/upload/",UploadDocumentView.as_view())
]