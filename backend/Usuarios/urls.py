from django.urls import path,include
from .views import RegisterView,Meview,ShowUser
urlpatterns = [
    path("register/",RegisterView.as_view()),
    path("api/auth/me/",Meview.as_view()),  
    path("show/user/<int:id>/",ShowUser.as_view())  
]