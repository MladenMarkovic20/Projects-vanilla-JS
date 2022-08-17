"use strict";

const input = document.body.querySelectorAll("input[type=number]");
const checkbox = document.body.querySelectorAll("input[type=checkbox]");
const button = document.body.querySelectorAll("input[type=button]");
const span = document.body.querySelectorAll("span");

document.body.addEventListener("click", mnozi);

function mnozi(e) {
    // console.log(e.target);
    let element = e.target;
    // console.log(element.type);
    if (element.type === "checkbox") {
        element.parentElement.querySelector("[type=button]").disabled =
            !element.checked;
    }
    if (element.type === "button") {
        let broj = element.parentElement.querySelector("[type=number]").value;
        let nasumično = Math.round(Math.random() * 10);
        element.parentElement.querySelector("span").textContent =
            broj * nasumično;
    }
}
