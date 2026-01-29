from django.urls import path
from .views import helloword,UploadDocumentView,MyDocument,UpdateStartMDocument,StartDocumentGet


urlpatterns = [
    path('documentos/',helloword),    
    path("documentos/upload/",UploadDocumentView.as_view()),
    path("documentos/getall/",MyDocument.as_view()),
    path("documentos/<int:id>/start/",UpdateStartMDocument.as_view()),
    path("documents/start/get/",StartDocumentGet.as_view())
]