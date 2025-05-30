from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from users.admin_views import pending_participants, validate_participant, reject_participant


urlpatterns = [  # Définir urlpatterns en premier
    path('api/', include('api.urls')),
    path('api/verify-nip/', include('nip_verification.urls')),
    path('api/upload-documents/', include('document_upload.urls')),
    path('admin/', admin.site.urls),
    path("admin/participants/pending/", pending_participants, name="pending_participants"),
    path("admin/participants/validate/<int:pk>/", validate_participant, name="validate_participant"),
    path("admin/participants/reject/<int:pk>/", reject_participant, name="reject_participant"),
    path('', include('users.urls')),  # en plus de api/

]

# Ajouter la gestion des fichiers statiques après la définition de urlpatterns
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)