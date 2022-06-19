const toDoForm = document.getElementById("todo-form");
const ToDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    const button1 = document.createElement("button");
    button.innerText="❌"
    button1.innerText="✔︎"
    button.addEventListener("click",removeTodo);
    button1.addEventListener("click",clearTodo)
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(button1);
    toDoList.appendChild(li);

}

function HandleToDoSubmit(event){
    event.preventDefault();
    const newTodo=ToDoInput.value;
    ToDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function removeTodo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo=>todo.id !== parseInt(li.id))
    saveTodos();
}
toDoForm.addEventListener("submit", HandleToDoSubmit)

function clearTodo(event){
    const li=event.target.parentElement;
    const cleared = li.querySelector("span");
    cleared.style.textDecorationLine = "line-through";
}

const savedToDos = localStorage.getItem("todos");

if(savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    parseToDos.forEach(paintTodo);
    toDos = parseToDos;
}