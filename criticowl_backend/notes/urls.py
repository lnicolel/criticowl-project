from django.urls import path
from .views import analyze_text, NoteListCreateView, TemplateFileUploadView

urlpatterns = [
    path('notes/', NoteListCreateView.as_view(), name='note-list-create'),
    path('analyze/', analyze_text, name='analyze_text'),
    path('upload-template/', TemplateFileUploadView.as_view(), name='upload_template'),
]
