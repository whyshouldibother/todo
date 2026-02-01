from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("todo/", views.todos, name="todo"),
    path("api/", views.api, name="api"),
    path("api/todos/", views.TodoListCreate.as_view(), name="list"),
    path("api/todos/<int:pk>/", views.TodoOperations.as_view(), name="operations"),
    
]