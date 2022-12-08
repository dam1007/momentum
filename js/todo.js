const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

const toDos = []; //localStorage에 정보 저장.

//4. 저장 기능
function saveToDos() {
    //로컬스토리지에서 불러오기 위해 문자열화.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//3. 삭제 기능
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

//2. 텍스트 submit 시, 동적으로 list 생성
function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const button = document.createElement('button');
    button.innerText = '삭제';
    li.append(span);
    li.append(button);
    todoList.append(li);

    //3. 삭제 버튼 클릭 시, list 삭제
    button.addEventListener('click', deleteToDo);

    //4. submit 시, localStorage에 저장
    toDos.push(newTodo);
    saveToDos();
}

//1. submit 기본 기능 금지, paintTodo 실행.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; //todoInput 값 지우기 전 newTodo에 저장. todoInput.value를 지워도 newTodo는 지워지지 않는다.
    todoInput.value = '';
    paintToDo(newTodo);
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//로컬스토리지에 저장된 값 불러와 화면에 그리기
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
}