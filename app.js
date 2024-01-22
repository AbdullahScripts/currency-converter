const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr/pkr.json";

let dropdowns = document.querySelectorAll(".dropdown select"); // dropdown selected

let fromDrop=document.getElementById("from"); // from dropdown slected
let toDrop=document.getElementById("to"); // to dropdown slected

let imgFrom = document.querySelector(".from img"); // from class image get
let imgTo = document.querySelector(".to img"); // to class image get

let getButton=document.getElementById("getRate"); // button of find exchange rate



let show = document.querySelector(".msg"); // get class message to show data


//////////////////////---Setting Values of dropdwon---/////////////////

for (select of dropdowns) {
  for (code in countryList) {
    let option = document.createElement("option");
    option.value = code;
    option.innerText = code;
// console.log(option.value)
    if (select.name === "from" && option.value === "USD") {
      option.setAttribute("selected", "selected");
    } else if (select.name === "to" && option.value === "PKR") {
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
  let findFlag=countryList[countryValue]
  // console.log("Selected Country:", countryValue);
   let newSrc = `https://flagsapi.com/${findFlag}/flat/64.png`;
   imgFrom.src=newSrc;
}

// second drop down

toDrop.addEventListener("change", handleChangeTo);

// function of change flag 

function handleChangeTo() {
  let countryValue = toDrop.value;
  let findFlag=countryList[countryValue];
 
  // console.log("Selected Country:", findFlag);
   let newSrc = `https://flagsapi.com/${findFlag}/flat/64.png`;
   imgTo.src=newSrc;
}


//////////////////---Find exchange rate button Functionality---/////////////////
getButton.addEventListener("click", async function(e) {
  await findExchange(e);
});

async function findExchange(e) {
  e.preventDefault();

  let inputvalue= document.getElementById("invalue").value; // input field data

  let countryFrom = fromDrop.value.toLowerCase();
  let countryTo = toDrop.value.toLowerCase();

  // console.log(countryFrom)
  // console.log(countryTo)

  const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryFrom}/${countryTo}.json`;
  
  const response = await fetch(BASE_URL);
    const data = await response.json();

    show.innerText=`${inputvalue} ${countryFrom} = ${inputvalue * data[countryTo]} ${countryTo}`

  
}
