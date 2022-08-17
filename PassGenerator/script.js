"use strict";

const dugme = document.querySelector("button");
const poljeZaispit = document.querySelector("span");

dugme.addEventListener("click", generatePassword);

function generatePassword() {
    let brojKaraktera = document.querySelector("input").value;
    let randomNum = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    let karakter = [];
    for (let i = 0; i < brojKaraktera; i++) {
        karakter.push(randomNum(33, 126));
    }
    poljeZaispit.textContent = String.fromCharCode(...karakter);
}
