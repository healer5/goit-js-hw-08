import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

getStorage();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM_KEY)));
  localStorage.removeItem(FORM_KEY);
}

const dataForm = {};

function onTextInput(event) {
  const name = event.target.name;
  const data = event.target.value;
  dataForm[name] = data;
  localStorage.setItem(FORM_KEY, JSON.stringify(dataForm));
}

function getStorage() {
  const savedData = JSON.parse(localStorage.getItem(FORM_KEY));

  if (!savedData) return;
  if (savedData.email) refs.email.value = savedData.email;
  if (savedData.message) refs.message.value = savedData.message;
}
