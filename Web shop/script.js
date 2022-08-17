"use strict";

const buttonAdd = document.querySelectorAll(".shop-item-button");
let bracket = document.querySelector(".bracket");
let removeAll = document.querySelector(".remove");

// Dodavanje pojedinačnih artikala u korpu
const dodaj = (e) => {
    let button = e.target;
    let article = button.parentElement.parentElement;
    let price = article.querySelector(".shop-item-price").textContent;
    let image = article.querySelector(".shop-item-image").src;
    let title = article.querySelector(".shop-item-title").textContent;
    let item = document.querySelectorAll(".cart-item-title-row");
    for (let i = 0; i < item.length; i++) {
        if (title === item[i].textContent) {
            alert("Artikal je već u korpi");
            return;
        }
    }
    let emptyStr = "";
    emptyStr += `<div class="cart-item cart-column">
    <img src="${image}" class="cart-item-image" />
    <span class="cart-item-title-row">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input type="number" min="1" max="99" value='1'/>
    <button type="button" class='danger'>Remove</button>
</div>`;
    let div = document.createElement("div");
    div.innerHTML = emptyStr;
    div.setAttribute("class", "cart-row");
    document.querySelector(".bracket").append(div);
    div.querySelector(".danger").addEventListener("click", obrisi);

    azurirajTotal();
};

// Brisanje svih artikala
function obrisiSve() {
    // Prvi način //
    // let item = bracket.querySelectorAll(".cart-row");
    // for (let i = 0; i < item.length; i++) {
    //     bracket.removeChild(item[i]);
    // }
    // Drugi način //
    bracket.innerHTML = "";
    azurirajTotal();
}

removeAll.addEventListener("click", obrisiSve);

// Brisanje pojedinačnih artikala
function obrisi(e) {
    let btn = this.parentElement.parentElement;
    btn.remove();
    azurirajTotal();
}

// Računanje koštanja ukupnih artikala u korpi
const azurirajTotal = () => {
    let items = bracket.querySelectorAll(".cart-row");
    let total = 0;
    items.forEach((elem) => {
        let price = parseFloat(
            elem.querySelector(".cart-price").textContent.substring(1)
        );

        let quantity = elem.querySelector("input[type=number]");
        let quantityValue = elem.querySelector("input[type=number]").value;
        quantity.setAttribute("onclick", "azurirajTotal()");
        // quantity.addEventListener("click", azurirajTotal);
        total += price * quantityValue;
    });
    document.querySelector(".cart-total-price").textContent =
        "$" + total.toFixed(2);
};

buttonAdd.forEach(function (elem) {
    elem.addEventListener("click", dodaj);
});

// Slajder
const images = document.querySelectorAll(".shop-item-image");
let niz = [];
images.forEach((elem) => {
    niz.push(elem.src);
});
document.querySelector(".slajder").querySelector("img").src = niz[0];
let brojac = 1;
setInterval(promeni, 2000);
function promeni() {
    if (brojac === niz.length) brojac = 0;
    document.querySelector(".slajder").querySelector("img").src = niz[brojac];
    brojac++;
}

let slike = document.querySelectorAll("img");
