const createAccountBtn = document.querySelector('.account-button button');
const requiredFields = document.querySelectorAll('input[required]');

const firstPassword = document.getElementById('pass');
const passOneCheckmark = document.querySelector('.pass-one-checkmark');
const passOneErrorMsg = document.querySelector('.pass-one-error-msg');

const secondPassword = document.getElementById('pass2');
const passTwoCheckmark = document.querySelector('.pass-two-checkmark');
const passTwoErrorMsg = document.querySelector('.pass-two-error-msg');


for (let i = 0; i < requiredFields.length; i++) {
    requiredFields[i].addEventListener('input', () => {
        if (requiredFields[i].style.outline.includes("red")) {
            requiredFields[i].style.outline = "1px solid blue";
        }
    })

    requiredFields[i].addEventListener('blur', (e) => {
        if (requiredFields[i].style.outline.includes("blue")) {
            e.target.style.outline = '';
        }
    })
}


let buttonClickCheck = 0;

createAccountBtn.addEventListener('click', () => {
    for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === '') {
            requiredFields[i].style = "outline: 1px solid red";
        }
    }

    if (passOneCheckmark.style.visibility === "visible" && passTwoCheckmark.style.visibility === "visible") {
        createAccountBtn.setAttribute("type", "submit");
        return
    }

    if (passOneCheckmark.style.visibility === "hidden") {
        createAccountBtn.setAttribute("type", "button");
        passOneErrorMsg.style = "visibility: visible; color:red;";
    }

    if (passTwoCheckmark.style.visibility === "hidden") {
        createAccountBtn.setAttribute("type", "button");
        passTwoErrorMsg.style = "visibility: visible; color:red;";
    }

    buttonClickCheck = 1;
})


firstPassword.addEventListener('focus', () => {
    if (buttonClickCheck === 0 && firstPassword.value.length < 6) {
        passOneErrorMsg.style = "visibility: visible; color: black;";
    }
})

firstPassword.addEventListener('blur', () => {
    if (buttonClickCheck === 0 && firstPassword.value.length === 0) {
        passOneErrorMsg.style = "visibility: hidden";
    }
})

firstPassword.addEventListener('input', () => {
    if (firstPassword.value.length >= 6) {
        passOneCheckmark.style.visibility = "visible";
        passOneErrorMsg.style = "visibility: hidden";
    } 
    else if (buttonClickCheck === 1) {
        passOneCheckmark.style.visibility = "hidden";
        passOneErrorMsg.style = "visibility: visible; color: red;";
    }
    else {
        passOneCheckmark.style.visibility = "hidden";
        passOneErrorMsg.style = "visibility: visible; color: black;";
    }

    if (firstPassword.value !== secondPassword.value && secondPassword.value !== '') {
        passTwoCheckmark.style.visibility = "hidden";
        passTwoErrorMsg.style = "visibility: visible; color:black;";        
    }
    
    if (firstPassword.value !== secondPassword.value && secondPassword.value !== '' && buttonClickCheck === 1) {
        passTwoErrorMsg.style = "visibility: visible; color:red;";        
    }
    
    if (firstPassword.value === secondPassword.value && secondPassword.value !== '') {
        passTwoCheckmark.style.visibility = "visible";
        passTwoErrorMsg.style = "visibility: hidden";           
    }
})



secondPassword.addEventListener('input', () => { 
    if (firstPassword.value === '' && buttonClickCheck === 0 
    || secondPassword.value === '' && buttonClickCheck === 0) {

        passTwoErrorMsg.style = "visibility: hidden";
        return
    }

    if (firstPassword.value === secondPassword.value) {
        passTwoCheckmark.style.visibility = "visible";
        passTwoErrorMsg.style = "visibility: hidden";
    } 
    else if (firstPassword.value !== secondPassword.value && buttonClickCheck === 1) {
        passTwoCheckmark.style.visibility = "hidden";
        passTwoErrorMsg.style = "visibility: visible; color:red;";    
    }
    else {
        passTwoCheckmark.style.visibility = "hidden";
        passTwoErrorMsg.style = "visibility: visible; color:black;";
    }
})