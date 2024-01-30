'use strict';
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementsByName('email')[0];
  const passwordInput = document.getElementsByName('password')[0];

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);
    document.getElementById('loginForm').reset();
  }
});
