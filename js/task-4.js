'use strict';
function submitForm(event) {
    event.preventDefault();

    const emailValue = document.forms['loginForm'].elements['email'].value.trim();
    const passwordValue = document.forms['loginForm'].elements['password'].value.trim();

   
    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
      return;
    }

  
    const formData = {
      email: emailValue,
      password: passwordValue
    };

 
    console.log(formData);

    document.forms['loginForm'].reset();
  }
