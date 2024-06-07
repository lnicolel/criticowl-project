from rest_framework import serializers
from .models import Note
from .models import TemplateFile


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
        read_only_fields = ('user',)


class TemplateFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemplateFile
        fields = '__all__'
        read_only_fields = ('user',)