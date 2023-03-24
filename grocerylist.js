const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let ediElement;
let editFlag = false;
let editId = "";
form.addEventListener("submit", addItem);
function addItem(e) {
    e.preventDefault();
    const value = grocery.value; 
const id= new Date().getTime().toString();
if(value && !editFlag) {
    console.log("Add item to the list");
}
else if(value !== "" && editFlag === true) {
    console.log("editing");
}
else {
alert.textContent = "empty value";
alert.classList.add("alert-danger");
}
}
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}

