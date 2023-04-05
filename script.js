const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registergLink = document.querySelector('.register-link')

registergLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});