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
    document_justificatif = serializers.FileField(write_only=True)

    class Meta:
        model = Participante
        fields = [
            'username', 'email', 'password',
            'first_name', 'last_name',
            'nip', 'region', 'ville', 'experience',
            'document_justificatif'
        ]

    def create(self, validated_data):
        file = validated_data.pop('document_justificatif')
        user = Participante.objects.create_user(**validated_data)
        user.document_justificatif = file
        user.save()
        return user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email
        if hasattr(user, 'statut_validation'):
            token['statut_validation'] = user.statut_validation
        if hasattr(user, 'nip'):
            token['nip'] = user.nip
        if hasattr(user, 'region'):
            token['region'] = user.region
        if hasattr(user, 'ville'):
            token['ville'] = user.ville
        return token
