const todoform = document.querySelector('.todoForm');
const todoinput = todoform.querySelector('input');
const todolist = document.querySelector('.todolist');

const ls_users = 'currentUser';
const ls_todolist = "todos";
let todoArray = [];

function saveTodoLS(){
    localStorage.setItem(ls_todolist, JSON.stringify(todoArray));
}

function deleteTodo(event){
    const btn = event.target;
    const btnli = btn.parentNode;
    todolist.removeChild(btnli);
    const newTodoList = todoArray.filter(res => {
        return res.id !== parseInt(btnli.id);
    })
    let cnt = 1;
    newTodoList.forEach(res => {
        res.id = cnt++;
    })
    todoArray = newTodoList;
    saveTodoLS();
}

function writeTodo(todo){
    todoinput.value = "";
    
    const li = document.createElement('li');
    const delbtn = document.createElement('button');
    delbtn.addEventListener('click', deleteTodo);
    li.innerText = `${todo}  `;
    delbtn.innerText = "✔️";
    delbtn.style.backgroundColor = 'transparent';
    delbtn.style.border = 'none';
    li.id = todoArray.length + 1;
    li.style.fontFamily = `Gamja Flower`;
    li.appendChild(delbtn);
    li.style.fontSize = `${window.screen.height/35}px`;
    li.style.color = 'white';
    todolist.appendChild(li);

    const todoObj = {
        text : todo,
        id : todoArray.length + 1
    };
    todoArray.push(todoObj);
    saveTodoLS();
}

function loadTodo(){
    const todo = localStorage.getItem(ls_todolist);
    if(todo !== null){
        const getTodo = JSON.parse(todo);
        // getTodo.forEach(res => writeTodo(res.text));
        getTodo.forEach(function(res){
            writeTodo(res.text);
        });
    }
}

function init(){
    const currentUser = localStorage.getItem(ls_users);
    if(currentUser !== null){
        todoform.style.textAlign = 'center';

        todoinput.style.textAlign = 'center';
        todoinput.style.fontSize = `${window.screen.height/30}px`;
        todoinput.style.border = 'solid 1px';
        todoinput.style.borderRadius = '40px 40px 40px 40px';
        todoinput.style.backgroundColor = 'transparent';
        todoinput.style.outline = 'none';
        todoinput.style.fontFamily = `Gamja Flower`;

        todolist.style.textAlign = 'center';
        todolist.style.listStyle = 'none';

        loadTodo();
        todoform.addEventListener('submit', (event) => {
            event.preventDefault();
            writeTodo(todoinput.value);
        })
    }
    else{
        todoform.style.display = 'none';
        todoinput.style.display = 'none';
    }
}

init();