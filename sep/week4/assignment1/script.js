const form = document.getElementById("registrationForm");



const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

const gender = document.querySelector('input[name="gender":checked');
const course = document.getElementById("course").value;
const message = document.getElementById("message");



const student = {
    name: name,
    email: email,
    phone: phone,

    gender: gender.value,
    course: course,

}

