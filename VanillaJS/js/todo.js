const todoForm = document.querySelector(".main-tabs__todo-form");
const todoInput = document.querySelector(".main-tabs__todo-form input");
const todoList = document.querySelector(".main-tabs__todo-list");

let todos = [];

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "삭제";

  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);

  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", handleTodoSubmit);

if (localStorage.getItem("todos") !== "[]") {
  const parsedTodos = JSON.parse(localStorage.getItem("todos"));
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
