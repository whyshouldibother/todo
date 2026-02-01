from django.shortcuts import render, HttpResponse
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics, filters
from rest_framework.pagination import PageNumberPagination

from .models import Todo

from .serializers import TodoSerializer

#class for pagination
class TodoPagination(PageNumberPagination):
    page_size=5
    page_size_query_param = 'page_size'

#get /api/todos
class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    pagination_class = TodoPagination
    
    #filtering
    filter_backends =[DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['is_completed']
    
    #ordering
    ordering_fields = ['created_at']
    ordering = ['created_at']


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
