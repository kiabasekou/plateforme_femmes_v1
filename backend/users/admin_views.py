
from users.models import Participante
from django.contrib.auth.decorators import login_required, user_passes_test
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
import json

def is_admin(user):
    return user.is_authenticated and user.is_staff

@login_required
@user_passes_test(is_admin)
def pending_participants(request):
    participantes = Participante.objects.filter(is_verified=False)
    return render(request, 'admin_dashboard/pending_participants.html', {'participantes': participantes})





def pending_participants(request):
    participantes = Participante.objects.filter(statut_validation='en_attente')
    return render(request, 'admin_dashboard/pending_participants.html', {
        'participantes': participantes
    })

def validate_participant(request, pk):
    participante = get_object_or_404(Participante, pk=pk)
    participante.statut_validation = 'validee'
    participante.motif_rejet = ''
    participante.save()
    messages.success(request, f"{participante.first_name} {participante.last_name} a été validée.")
    return redirect('pending_participants')



@csrf_exempt
def reject_participant(request, pk):
    if request.method == 'POST':
        participante = get_object_or_404(Participante, pk=pk)
        try:
            data = json.loads(request.body)
            motif = data.get('motif', '').strip()
            if not motif:
                return JsonResponse({'error': 'Motif de rejet requis.'}, status=400)
            participante.statut_validation = 'rejetee'
            participante.motif_rejet = motif
            participante.save()
            return JsonResponse({'success': True, 'message': 'Participante rejetée avec motif.'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Requête JSON invalide'}, status=400)
