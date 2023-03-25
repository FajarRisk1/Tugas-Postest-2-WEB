const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const city = document.getElementById('city').value;
const file = document.getElementById('file').value;
const message = document.getElementById('message').value;
const agreement = document.querySelector('input[name="agreement"]:checked').value;

const formData = {
  name: name,
  email: email,
  subject: subject,
  gender: gender,
  city: city,
  file: file,
  message: message,
  agreement: agreement
};

let formArray = JSON.parse(sessionStorage.getItem('formArray')) || [];
formArray.push(formData);

sessionStorage.setItem('formArray', JSON.stringify(formArray));
const sendMessageBtn = document.querySelector('.btn-tertiary');

sendMessageBtn.addEventListener('click', function() {
  saveFormData();
});
