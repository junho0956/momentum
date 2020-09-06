const form_data = document.querySelector('.user-js');
const input_data = form_data.querySelector('input');
const user_title = document.querySelector('.momentum_user');
const todoForms = document.querySelector('.todoForm');
const todoinputs = document.querySelector('input');
// user localStorage in chrome
const ls_user = "currentUser";

function setUserName(name){
    localStorage.setItem(ls_user, name);
    form_data.style.display = "none";
    user_title.style.display = "block";
    user_title.innerText = `Hello ${name}!`;
    todoForms.style.display = 'block';
    todoinputs.style.display = 'block';
}

function askForname(){
    form_data.style.display = 'block';
    user_title.style.display = 'none';
    form_data.addEventListener('submit', function(event){
        event.preventDefault();
        console.log("입력 : "+input_data.value);
        setUserName(input_data.value);
    })
}

function getUser(){
    const currentUser = localStorage.getItem(ls_user);
    console.log('currentUser : '+currentUser);
    if(currentUser === null){
        askForname();
    }
    else{
        setUserName(currentUser);
    }
}

function init(){
    user_title.style.color = 'white';
    user_title.style.fontSize = `${(window.screen.height)/20}px`;
    user_title.style.textAlign = 'center';
    user_title.style.marginTop = '0';
    user_title.style.fontFamily = `Gamja Flower`;

    form_data.style.textAlign = 'center';

    input_data.style.color = 'white';
    input_data.style.textAlign = 'center';
    input_data.style.fontSize = `${(window.screen.height)/30}px`;
    input_data.style.border = 'solid 1px';
    input_data.style.borderRadius = '40px 40px 40px 40px';
    input_data.style.backgroundColor = 'transparent';
    input_data.style.marginBottom = '20px';
    input_data.style.outline = 'none';
    
    getUser();
}

init();