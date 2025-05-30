
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Participante
from .serializers import (
    ParticipanteSerializer,
    CustomTokenObtainPairSerializer,
    RegistrationSerializer
)

class RegisterView(CreateAPIView):
    queryset = Participante.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegistrationSerializer

class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = ParticipanteSerializer(request.user)
        return Response(serializer.data)
