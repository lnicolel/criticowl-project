from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import spacy
from textblob import TextBlob
from rest_framework import generics, permissions
from .models import Note
from .serializers import NoteSerializer
from .models import TemplateFile
from .serializers import TemplateFileSerializer
from rest_framework.parsers import MultiPartParser, FormParser

nlp = spacy.load("en_core_web_sm")


class NoteListCreateView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


def format_result(result):
    formatted_result = ""
    for i in range(0, len(result), 2):
        formatted_result += f'"{result[i][0]}", - "{result[i][1]}"'
        if i+1 < len(result):
            formatted_result += f'\t\t"{result[i+1][0]}", - "{result[i+1][1]}"\n'
        else:
            formatted_result += "\n"
    return formatted_result


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def analyze_text(request):
    text = request.data.get('text')
    analysis_type = request.data.get('analysis_type')

    if not text or not analysis_type:
        return Response({'error': 'Text and analysis type are required'}, status=400)

    if analysis_type == 'pos':
        doc = nlp(text)
        result = [(token.text, token.pos_) for token in doc]
    elif analysis_type == 'ner':
        doc = nlp(text)
        result = [(ent.text, ent.label_) for ent in doc.ents]
    elif analysis_type == 'sentiment':
        blob = TextBlob(text)
        result = {
            'polarity': blob.sentiment.polarity,
            'subjectivity': blob.sentiment.subjectivity
        }
    else:
        return Response({'error': 'Invalid analysis type'}, status=400)

    if isinstance(result, list):
        formatted_result = format_result(result)
        return Response({'result': formatted_result})

    return Response({'result': result})


class TemplateFileUploadView(generics.CreateAPIView):
    queryset = TemplateFile.objects.all()
    serializer_class = TemplateFileSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)