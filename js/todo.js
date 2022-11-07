const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

//3. 삭제 기능
function deleteToDo(event) {
    console.dir(event.target.parentElement);
}

//2. 텍스트 입력 시, 동적으로 list 생성
function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    button.innerText = '❌';
    todoList.appendChild(li);
    button.addEventListener('click', deleteToDo);
    console.log(todoList);
}

//1. submit 기본 기능 금지, paintTodo 실행.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; //todoInput 값 지우기 전 newTodo에 저장. todoInput.value를 지워도 newTodo는 지워지지 않는다.
    todoInput.value = '';
    paintToDo(newTodo);
}

todoForm.addEventListener('submit', handleToDoSubmit);