
from django.contrib.auth.models import AbstractUser
from django.db import models

class Participante(AbstractUser):
    email = models.EmailField(unique=True)  # 🔁 nécessaire pour JWT
    nip = models.CharField(max_length=20, unique=True)
    region = models.CharField(max_length=100)
    ville = models.CharField(max_length=100)
    experience = models.CharField(
        max_length=20,
        choices=[('aucune', 'Aucune'), ('locale', 'Locale'), ('régionale', 'Régionale'), ('nationale', 'Nationale')],
        default='aucune'
    )
    document_justificatif = models.FileField(upload_to='documents/')
    statut_validation = models.CharField(
        max_length=20,
        choices=[('en_attente', 'En attente'), ('validee', 'Validée'), ('rejetee', 'Rejetée')],
        default='en_attente'
    )
    motif_rejet = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.nip})"

    @property
    def nom_complet(self):
        return f"{self.first_name} {self.last_name}"


