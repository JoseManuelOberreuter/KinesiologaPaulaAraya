const form = document.getElementById("contactForm");
const divDisplay = document.getElementById("afterSend");

// SENDING FORM
form.addEventListener("submit", (e) => {

    e.preventDefault();

    form.style.display = "none";
    divDisplay.style.display = "block";

    console.log('Formulario enviado')
    
});

// CHECK INPUTS 
function checkName(){
    const name = document.getElementById("name");
    const nameValue = name.value;
    const errorName = document.getElementById('errorName');

    if(nameValue === ''){
        name.style.border = '3px solid red';
    } else {
        name.style.border = '3px solid green';
        errorName.style.display = 'none'
    }
}

function checkRut(){
    const rut = document.getElementById("rut");
    const rutValue = rut.value;
    const errorRut = document.getElementById('errorRut');

    if(rutValue === ''){
        rut.style.border = '3px solid red'
        errorRut.style.display = 'block';
    } else {
        rut.style.border = '3px solid green';
        errorRut.style.display = 'none'
    }
}

function checkEmail(){
    const email = document.getElementById("email");
    const emailValue = email.value;
    const errorEmail = document.getElementById('errorEmail');

        if(emailValue === ''){
        email.style.border = '3px solid red'
        errorEmail.style.display = 'block';
    } else {
        email.style.border = '3px solid green';
        errorEmail.style.display = 'none'
    }
}


function checkPhone() {
    const phone = document.getElementById("phone");
    const phoneValue = phone.value;
    const errorPhone = document.getElementById('errorPhone');

    if(phoneValue === ''){
        phone.style.border = '3px solid red'
        errorPhone.style.display = 'block';
    } else {
        phone.style.border = '3px solid green';
        errorPhone.style.display = 'none'
    }
}

function checkComuna(){
    const comuna = document.getElementById("comuna");
    const comunaValue = comuna.value;
    const errorComuna = document.getElementById('errorComuna');

    if(comunaValue === ''){
        comuna.style.border = '3px solid red'
        errorComuna.style.display = 'block';
    } else {
        comuna.style.border = '3px solid green';
        errorComuna.style.display = 'none'
    }
}

function checkMessage(){
    const message = document.getElementById("message");
    const messageValue = message.value;
    const errormessage = document.getElementById('errorMessage');

    if(messageValue === ''){
        message.style.border = '3px solid red'
        errormessage.style.display = 'block';
    } else {
        message.style.border = '3px solid green';
        errormessage.style.display = 'none'
    }
}

