const createAccountBtn = document.querySelector('.account-button button');
const requiredFields = document.querySelectorAll('input[required]');

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
