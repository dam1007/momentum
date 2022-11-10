const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

const toDos = []; //localStorage에 정보 저장. 그러나 localStorage에 배열 저장 x.

//4. 저장 기능
function saveToDo() {

}

//3. 삭제 기능
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

//2. 텍스트 입력 시, 동적으로 list 생성
function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const button = document.createElement('button');
    button.innerText = '삭제';
    li.append(span);
    li.append(button);
    todoList.append(li);
    button.addEventListener('click', deleteToDo);
    toDos.push(newTodo);
    console.log(toDos);
}

//1. submit 기본 기능 금지, paintTodo 실행.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; //todoInput 값 지우기 전 newTodo에 저장. todoInput.value를 지워도 newTodo는 지워지지 않는다.
    todoInput.value = '';
    paintToDo(newTodo);
}

todoForm.addEventListener('submit', handleToDoSubmit);