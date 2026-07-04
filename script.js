const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

}
else{

icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");

}

}
//================ Counter Animation ================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

}

updateCounter();

});
// Bootstrap Validation

(() => {

'use strict';

const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach(form => {

form.addEventListener('submit', event => {

if (!form.checkValidity()) {

event.preventDefault();

event.stopPropagation();

}

form.classList.add('was-validated');

}, false);

});

})();
//================ Back To Top Button ================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});