from django.urls import path,include
from .views import helloword
from .documentserializer import DocumentView
from rest_framework import routers
router=routers.DefaultRouter()
router.register('Documentos',DocumentView)
urlpatterns = [
    path('documentos/',helloword),
    path("api/",include(router.urls))
]