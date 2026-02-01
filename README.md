# Todo

Todo Application with django

## Tech Stack

Language: Python
Framework: Django / Django Rest Framework (DRF)
Database: SQlite

## Setup Instructions
1) Clone the repository
```
git clone https://github.com/whyshouldibother/todo.git
cd todo
```
2) Create Virtual Envirnoment (Recommended)
```
python -m venv .venv
source .venv/bin/activate
```
3) Install dependencies
```
pip install -r requirements.txt
```
4) Run the server
```
python server/manage.py runserver
```
Server runs at 127.0.0.1:8000 or localhost:8000
## API Endpoints
|Method|Endpoint|Description|Test|
|---|---|---|---|
|GET|/api/todos/|Get all todos|`curl -X GET http://localhost:8000/api/todos/`|
|POST|/api/todos/|Create a new todo|`curl -X POST http://localhost:8000/api/todos/ -H "Content-Type: application/json" -d '{"title":"{Some title}", "description":"{Some Description}"}'`|
|GET|/api/todos/<id>|Get a single todo|`curl -X GET http://localhost:8000/api/todos/{id}`|
|PUT/PATCH|/api/todos/{id}|Create a new todo|`curl -X PUT http://localhost:8000/api/todos/ -H "Content-Type: application/json" -d '{"title":{"New Title"}, "description":"{New Description}"}'`|
|DELETE|/api/todos/<id>|Delete a todo|`curl -X GET http://localhost:8000/api/todos/{id}`|