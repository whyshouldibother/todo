from django.shortcuts import render, HttpResponse
from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

#get /api/todos
class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

#get /api/todos/<id>/ 
#id passed as pk
class TodoOperations(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


# Create your views here.
def home(request):
    return render(request, "home.html")

def todos(request):
    items = Todo.objects.all()
    return render(request, "todo.html", {"todos":items})

def api(request):
    return render(request, "api.html")
