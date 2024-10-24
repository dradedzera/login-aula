const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('error-message')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    
    alert(email_input.value);
    error_message.innerText = password_input.value;
});