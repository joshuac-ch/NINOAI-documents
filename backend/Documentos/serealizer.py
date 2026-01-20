
from .models import DocumentosModel 
from rest_framework import serializers
class DocumentSerealizer(serializers.ModelSerializer):
    file_url=serializers.SerializerMethodField()
    file_type=serializers.SerializerMethodField()
    class Meta():
        model=DocumentosModel
        fields=["id","file_url","file_type","created_at","ask","text"]

    def get_file_url(self,obj):
        request=self.context.get("request")
        if not obj.file:
            return None
        return request.build_absolute_uri(obj.file.url)

    def get_file_type(self,obj):
        name=obj.file.name.lower()
        if name.endswith(".pdf"):
            return "pdf"
        if name.endswith(".doc") or name.endswith(".docx"):
            return "word"       
        return "other" 