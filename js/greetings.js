const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//1. submit 클릭 시 로컬 스토리지에 유저정보 저장하기
function onLoginSubmit(event) {
    event.preventDefault(); //submit 기본 이벤트 사용 금지
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //로컬 스토리지에 유저명 저장.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paingGreetings(username);
}

//3. 함수화
function paingGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//2. 로컬 스토리지에 유저정보 유무 확인하여 조건 처리하기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 정보 없으면 show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // 있으면 show the greetings
    paingGreetings(savedUsername);
}