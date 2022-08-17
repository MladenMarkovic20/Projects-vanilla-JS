"use strict";

const word1 = document.querySelector(".word-1");
const word2 = document.querySelector(".word-2");
const buttonSubmit = document.querySelector(".myButton");
const buttonAgain = document.querySelector(".again");

function submit() {
    let rec1 = word1.value;
    let rec2 = word2.value;
    anagrams(rec1, rec2);
}
function reset() {
    location.reload();
}
buttonSubmit.addEventListener("click", submit);
buttonAgain.addEventListener("click", reset);

function anagrams(stringA, stringB) {
    // use function per string and compare them
    let div = document.querySelector(".result");
    console.log(div);
    let result = cleanString(stringA) === cleanString(stringB);
    let str = "";
    str += `<h4 class="result">Result is ${result}!</h4>`;
    div.innerHTML = str;
}
// create helper function to clean up string
function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
