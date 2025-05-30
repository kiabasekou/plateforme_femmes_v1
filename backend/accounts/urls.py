
from django.urls import path
from .views import ExampleAPIView

urlpatterns = [
    path('', ExampleAPIView.as_view()),
]
