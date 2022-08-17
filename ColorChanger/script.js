"use scrict";

let array = [];
let brojac = 0;
let tajmer;
var div = document.getElementsByClassName("polje")[0];

let startDugme = document.getElementById("start");
let stopDugme = document.getElementById("stop");

function pokreni() {
    for (let i = 0; i < 3; i++) {
        let boja = document.body.querySelectorAll("input[type=color]");
        array.push(boja[i].value);
        console.log(array);
    }
    tajmer = setInterval(menjaj, 1000);
}
function menjaj() {
    if (brojac > 2) {
        brojac = 0;
    }
    div.style.backgroundColor = array[brojac];
    brojac++;
}
function zaustavi() {
    clearInterval(tajmer);
}

startDugme.addEventListener("click", pokreni, false);
stopDugme.addEventListener("click", zaustavi, false);
