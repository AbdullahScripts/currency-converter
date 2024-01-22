const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr/pkr.json";

let dropdowns = document.querySelectorAll(".dropdown select"); // dropdown selected

let imgFrom = document.querySelector(".from img"); // from class image get
let imgTo = document.querySelector(".to img"); // to class image get

for (select of dropdowns) {
  for (code in countryList) {
    let option = document.createElement("option");
    option.value = countryList[code];
    option.innerText = code;

    if (select.name === "from" && option.value === "US") {
      option.setAttribute("selected", "selected");
    } else if (select.name === "to" && option.value === "IN") {
      option.setAttribute("selected", "selected");
    }

    select.appendChild(option);
  }
}











// let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
