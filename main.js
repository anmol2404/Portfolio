const form = document.getElementById('form');
const formname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const nameerror = document.getElementById('nameerror');
const emailerror = document.getElementById('emailerror');
const messageerror = document.getElementById('messageerror');

let errorcounter = 0;

function validateForm(event) {
    event.preventDefault();

  if (formname.value.trim() === '') {
    nameerror.innerHTML = 'Name cannot be blank';
    nameerror.style.color = 'red';
    formname.style.border = '1px solid red';
    errorcounter ++;
  } else {
    nameerror.innerHTML = '';
    formname.style.border = '1px solid green';
  }

  if (email.value.trim() === '') {
    emailerror.innerHTML = 'Email cannot be blank';
    emailerror.style.color = 'red';
    email.style.border = '1px solid red';
    errorcounter ++;
  } else {
    emailerror.innerHTML = '';
    email.style.border = '1px solid green';
  }

  if (message.value.trim() === '') {
    messageerror.innerHTML = 'Message cannot be blank';
    messageerror.style.color = 'red';
    message.style.border = '1px solid red';
    errorcounter ++;
  } else {
    messageerror.innerHTML = '';
    message.style.border = '1px solid green';
  }

    if (errorcounter > 0) {
        return false;
    } else {
        return true;
    }
}

formname.addEventListener('input', function () {
  if (formname.value.trim() === '') {
    nameerror.innerHTML = 'Name cannot be blank';
    nameerror.style.color = 'red';
    formname.style.border = '1px solid red';
  } else {
    nameerror.innerHTML = '';
    formname.style.border = '1px solid green';
  }
});

email.addEventListener('input', function () {
  if (email.value.trim() === '') {
    emailerror.innerHTML = 'Email cannot be blank';
    emailerror.style.color = 'red';
    email.style.border = '1px solid red';
  } else {
    emailerror.innerHTML = '';
    email.style.border = '1px solid green';
  }
});

message.addEventListener('input', function () {
  if (message.value.trim() === '') {
    messageerror.innerHTML = 'Message cannot be blank';
    messageerror.style.color = 'red';
    message.style.border = '1px solid red';
  } else {
    messageerror.innerHTML = '';
    message.style.border = '1px solid green';
  }
});