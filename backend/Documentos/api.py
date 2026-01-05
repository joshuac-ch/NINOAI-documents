from rest_framework import serializers
from Documentos.models import DocumentosModel
class DocumentSerealizer(serializers.ModelSerializer):
    class Meta:
        model=DocumentosModel,
        fields=['nombre']