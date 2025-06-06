from django.urls import path
from .views import RegisterView, LoginView, ProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', LoginView.as_view(), name='token_obtain_pair'),  # remplace le TokenObtainPairView par LoginView
    path('profile/', ProfileView.as_view(), name='profile'),
]
