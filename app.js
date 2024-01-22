const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr/pkr.json";

let dropdowns = document.querySelectorAll(".dropdown select"); // dropdown selected

let fromDrop=document.getElementById("from"); // from dropdown slected
let toDrop=document.getElementById("to"); // to dropdown slected

let imgFrom = document.querySelector(".from img"); // from class image get
let imgTo = document.querySelector(".to img"); // to class image get


//////////////////////---Setting Values of dropdwon---/////////////////

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

//////////////////////---Change Flag Functionality---/////////////////

fromDrop.addEventListener("change", handleChangeFrom);

// function of change flag 

function handleChangeFrom() {
  let countryValue = fromDrop.value;
  // console.log("Selected Country:", countryValue);
   let newSrc = `https://flagsapi.com/${countryValue}/flat/64.png`;
   imgFrom.src=newSrc;
}

// second drop down

toDrop.addEventListener("change", handleChangeTo);

// function of change flag 

function handleChangeTo() {
  let countryValue = toDrop.value;
  // console.log("Selected Country:", countryValue);
   let newSrc = `https://flagsapi.com/${countryValue}/flat/64.png`;
   imgTo.src=newSrc;
}


//////////////////////---Change Flag Functionality---/////////////////







