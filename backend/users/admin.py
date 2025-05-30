
from django.contrib import admin
from .models import Participante

@admin.register(Participante)
class ParticipanteAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'nip', 'region', 'statut_validation')
    list_filter = ('statut_validation', 'region')
    search_fields = ('username', 'email', 'nip')
