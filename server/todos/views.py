from django.shortcuts import render, HttpResponse
from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

#get /api/todos
class TodoList(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    http_method_names=["get"]

#get /api/todos/<id>/ 
#id passed as pk
class TodoShow(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    lookup_field = "id"
    http_method_names=["get"]

#put/patch /api/todos/<id>/
class TodoUpdate(generics.UpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    # http_method_names=["put","patch"]
    
#post /api/todos/<id>/
class TodoCreate(generics.CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    http_method_names=["post"]
    
#delete /api/todos/<id>
class TodoDelete(generics.DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = Todo.objects.all()
    lookup_field="id"
    http_method_names=["delete"]

# Create your views here.
def home(request):
    return render(request, "home.html")

def todos(request):
    items = Todo.objects.all()
    return render(request, "todo.html", {"todos":items})

def api(request):
    return HttpResponse( "Hello world")
