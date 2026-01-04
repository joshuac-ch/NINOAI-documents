from django.urls import path,include
from .views import RegisterView,Meview
urlpatterns = [
    path("register/",RegisterView.as_view()),
    path("api/auth/me/",Meview.as_view())    
]