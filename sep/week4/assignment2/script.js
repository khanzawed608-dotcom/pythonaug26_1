const form = document.getElementById("registrationForm");



const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const adress = document.getElementById("adress").value;
const dateofbirth = document.getElementById("date of birth").value;
const gender = document.querySelector('input[name="gender":checked');
const course = document.getElementById("course").value;
const message = document.getElementById("message");



const student = {
    name: name,
    email: email,
    phone: phone,
    adress: adress,
    dateofbirth: dateofbirth,
    gender: gender.value,
    course: course,

}

function saveData() {
    let form = document.getElementById("name").value;
    localStorage.setItem("name", email, phone, adress, dateofbirth, gender, course);
    alert("Data Saved!");
}