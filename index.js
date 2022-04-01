let input = document.querySelector("input");
let cardContainer = document.getElementById("card-container");
input.addEventListener("keyup", () => {
    cardContainer.className = "d-block"
    let inputVal = input.value;
    console.log(inputVal);

    // getting fields for gram kilo and ounces
    let grams = document.getElementById("grams");
    let kg = document.getElementById("kg");
    let ounces = document.getElementById("ounces");

    grams.innerHTML = inputVal*453.59237;
    kg.innerHTML = inputVal*0.45359237;
    ounces.innerHTML = inputVal*16;
})