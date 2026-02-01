from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("todo/", views.todos, name="todo"),
    path("api/", views.api, name="api"),
    path("api/todos/", views.TodoList.as_view(), name="list"),
    path("api/todos/<int:pk>/", views.TodoShow.as_view(), name="show"),
    path("api/todos/<int:pk>/", views.TodoUpdate.as_view(), name="update"),
    path("api/todos/<int:pk>/", views.TodoCreate.as_view(), name="create"),
    path("api/todos/<int:pk>/", views.TodoDelete.as_view(), name="delete")
    
]