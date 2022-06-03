const createAccountBtn = document.querySelector('.account-button button');
const requiredFields = document.querySelectorAll('input[required]');
const firstPassword = document.getElementById('pass');
const firstPasswordLabel = document.querySelector('.pass-one-label');
const secondPassword = document.getElementById('pass2');
const secondPasswordLabel = document.querySelector('.pass-two-label');

createAccountBtn.addEventListener('click', () => {
    for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === '') {
            requiredFields[i].style = "outline: 1px solid red";
        }
    }
})

for (let i = 0; i < requiredFields.length; i++) {
    requiredFields[i].addEventListener('input', () => {
        if (requiredFields[i].style.outline.includes("red")) {
            requiredFields[i].style.outline = "1px solid blue";
        }
    })

    requiredFields[i].addEventListener('blur', (e) => {
        e.target.style.outline = '';
    })
}

firstPassword.addEventListener('blur', (e) => {
    if (firstPasswordLabel.classList.contains("checkmark") == true) {
        firstPasswordLabel.classList.remove("checkmark");
        console.log('removed checkmark class');
    }
    if (e.target.value !== '') {
        firstPasswordLabel.classList.add("checkmark");
        console.log('added checkmark class');
    }
})
