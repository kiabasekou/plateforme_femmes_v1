from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from users.admin_views import pending_participants, validate_participant, reject_participant

urlpatterns = [
    path('admin/', admin.site.urls),

    # Vues personnalisées d’administration
    path("admin/participants/pending/", pending_participants, name="pending_participants"),
    path("admin/participants/validate/<int:pk>/", validate_participant, name="validate_participant"),
    path("admin/participants/reject/<int:pk>/", reject_participant, name="reject_participant"),

    # Inclusion des routes fonctionnelles
    path('api/', include('api.urls')),
    path('api/verify-nip/', include('nip_verification.urls')),
    path('api/upload-documents/', include('document_upload.urls')),

    # Utiliser les vues personnalisées de users
    path('api/', include('users.urls')),  # correction : le bon préfixe est "api/", pas la racine

    # Le point d’entrée '/' peut pointer vers une vue publique plus tard
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
