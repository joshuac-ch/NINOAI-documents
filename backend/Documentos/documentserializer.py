from .api import DocumentSerealizer
from .models import DocumentosModel
from rest_framework import permissions,viewsets

class DocumentView(viewsets.ModelViewSet):
    queryset=DocumentosModel.objects.all()
    serializer_class=DocumentSerealizer
    permission_classes=[permissions.AllowAny]

    