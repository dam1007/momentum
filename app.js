const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);

    //JS 이용한 유효성 검사
    /* if( username === '' ) {
        alert('Please write your name.');
    } else if ( username.length > 15) {
        alert('Your name is too long.');
    } */

    //브라우저 이용한 유효성 검사
}

loginButton.addEventListener('click', onLoginSubmit);