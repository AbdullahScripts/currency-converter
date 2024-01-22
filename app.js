const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr/pkr.json";

let dropdowns = document.querySelectorAll(".dropdown select"); // dropdown selected

let fromDrop=document.getElementById("from"); // from dropdown slected
let toDrop=document.getElementById("to"); // to dropdown slected

let imgFrom = document.querySelector(".from img"); // from class image get
let imgTo = document.querySelector(".to img"); // to class image get

let getButton=document.getElementById("getRate"); // button of find exchange rate


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

  let countryFrom = fromDrop.value.toLowerCase();
  let countryTo = toDrop.value.toLowerCase();

  console.log(countryFrom)
  console.log(countryTo)

  const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryFrom}/${countryTo}.json`;
  // const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryFrom.toLowerCase()}/${countryTo.toUpperCase()}.json`;

  const response = await fetch(BASE_URL);
    const data = await response.json();

    console.log(data);

  
  // Rest of your code here
}

// // Return value of API

// async function valAPI(api) {
//   try {
//     const response = await fetch(api);
//     const data = await response.json();

//     console.log(data);
//     // Perform actions with the data

//     return data; // You may want to return the data for further use
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Rethrow the error to handle it in the calling function if needed
//   }
// }
