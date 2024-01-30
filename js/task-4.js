'use strict';

const form = document.querySelector('.login-form');

function formHandler(event) {
    event.preventDefault();

    const data = {
        email: event.target.email.value.trim(),
        password: event.target.password.value.trim()
    };

    if (!data.email || !data.password) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(`E-mail: ${data.email}, Password: ${data.password}`);

    form.reset();
}

form.addEventListener('submit', formHandler);


