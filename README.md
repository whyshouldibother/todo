# Todo

Todo Application with Django

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Running The Server](#running-the-server)
- [API Endpionts](#api-endpoints)
  - [Testing API Endpoints](#testing-api-endpoints)
- [Accessing The Django Admin Panel](#accessing-the-django-admin-panel)

## Tech Stack

Language: Python </br>
Framework: Django / Django Rest Framework (DRF) </br>
Database: SQlite </br>

## Setup Instructions

1. Clone the repository
   ```
   git clone https://github.com/whyshouldibother/todo.git
   cd todo
   ```
2. Create Virtual Envirnoment (Recommended)
   ```
   python -m venv .venv
   source .venv/bin/activate
   ```
3. Install Dependencies
   ```
   pip install -r requirements.txt
   ```
4. Applying Migrations
   ```
   python server/manage.py makemigrations
   python server/manage.py migrate
   ```

## Running the server

```
python server/manage.py runserver
```

Server runs at 127.0.0.1:8000 or localhost:8000

## API Endpoints

| Operation   | Method    | Endpoint        | Description       |
| ----------- | --------- | --------------- | ----------------- |
| Create      | POST      | /api/todos/     | Create a new todo |
| Retrive All | GET       | /api/todos/     | Get all todos     |
| Retrive One | GET       | /api/todos/<id> | Get a single todo |
| Update      | PUT/PATCH | /api/todos/{id} | Create a new todo |
| Delete      | DELETE    | /api/todos/<id> | Delete a todo     |

### Testing API Endpoints

- Create

  ```
  curl -X POST http://localhost:8000/api/todos/ \
  -H "Content-Type: application/json" \
  -d '{"title":"{Some title}", "description":"{Some Description}"}'
  ```

- Retrive All

  ```
  curl -X GET http://localhost:8000/api/todos/
  ```

- Retrive One

  ```
  curl -X GET http://localhost:8000/api/todos/{id}/
  ```

- Update

  ```
  curl -X PUT http://localhost:8000/api/todos/{id}/ \
  -H "Content-Type: application/json" \
  -d '{"title":{"New Title"}, "description":"{New Description}"}'
  ```

  or

  ```
  curl -X PATCH http://localhost:8000/api/todos/{id}/ \
  -H "Content-Type: application/json" \
  -d '{"title":{"New Title"}, "description":"{New Description}"}'
  ```

- Delete

  ```
  curl -X GET http://localhost:8000/api/todos/{id}/
  ```

## Accessing the Django Admin Panel

- Create Admin User
  ```
  python server/manage.py createsuperuser
  ```
- Restart The Server
- Access Django Admin
  `http://localhost:8000/admin`
  Login in with the superuser credentials
