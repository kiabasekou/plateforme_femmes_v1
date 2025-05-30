
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Participante

class ParticipanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participante
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name',
            'nip', 'region', 'ville', 'experience',
            'document_justificatif', 'statut_validation', 'motif_rejet'
        ]
        read_only_fields = ['statut_validation', 'motif_rejet']

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Participante
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'nip', 'region', 'ville', 'experience']

    def create(self, validated_data):
        user = Participante.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            nip=validated_data['nip'],
            region=validated_data['region'],
            ville=validated_data['ville'],
            experience=validated_data['experience'],
        )
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['statut_validation'] = user.statut_validation
        return token
