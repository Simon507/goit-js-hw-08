var throttle = require('lodash/throttle');
const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('[name="email"]');
const userMessage = document.querySelector('[name="message"]');
const rest = {
  email: '',
  message: '',
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutput();

function updateOutput() {
  const getDataJSON = localStorage.getItem(LOCALSTORAGE_KEY);
  try {
    const getData = JSON.parse(getDataJSON);
    userEmail.value = getData.email;
    userMessage.value = getData.message;
    rest.email = userEmail.value;
    rest.message = userMessage.value;
  } catch (error) {
    // console.log(error.name); // "SyntaxError"
    // console.log(error.message); // Unexpected token W in JSON at position 0
    return;
  }
}

form.addEventListener('input', throttle(addValues, 500));

function addValues(evt) {
  evt.preventDefault();
  if (evt.target.name == 'email') {
    rest.email = evt.target.value;
  } else if (evt.target.name == 'message') {
    rest.message = evt.target.value;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(rest));
}

form.addEventListener('submit', submit);

function submit(evt) {
  evt.preventDefault();
  console.log(rest);
  userEmail.value = '';
  userMessage.value = '';
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
