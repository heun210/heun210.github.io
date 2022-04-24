const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function onDeleteToDo(event) {
  const li = event.target.parentElement;
  //console.dir(event.target.parentNode);
  li.remove();
  //toDoList.removeChild(li);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("todo-list-text");
  const check = document.createElement("i");
  check.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  const span = document.createElement("span");
  span.innerText = `${newTodo.text}    `;
  const button = document.createElement("button");
  button.innerText = "🗑️";
  button.addEventListener("click", onDeleteToDo);
  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function onToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", onToDoSubmit);

const loadToDos = localStorage.getItem(TODOS_KEY);

if (loadToDos !== null) {
  const parsedToDos = JSON.parse(loadToDos);
  //toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
