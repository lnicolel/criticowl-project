from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, this is the home page.")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('notes.urls')),
    path('api/', include('users.urls', namespace='users')),
]
