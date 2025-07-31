
const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

 const dropdowns = document.querySelectorAll(".Dropdown select");
 const btn = document.querySelector("button");
 const  fromCurr = document.querySelector(".from select");
 const ToCurr = document.querySelector(".To select")
 const msg = document.querySelector(".msg");


for(let select of dropdowns){
    for(currCode in countryList ){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
         if(select.name === "from" && currCode === "USD"){
                newOption.selected="selected";
         }else if(select.name === "To" && currCode === "INR"){
                newOption.selected="selected";
         }
        select.append(newOption)
    }
     select.addEventListener('change',(evt)=>{
        updateFlag(evt.target);
     });
}

const updateExchangeRate = async ()=>{
let amount= document.querySelector(".Amount input");
let amtVal=amount.value;
console.log(amtVal);

if (amtVal==="" || amtVal<0){
    alert('please enter the valid amount! ');
    amount.value="0";
}
//console.log(fromCurr.value,ToCurr.value);

//this code is not working 

// const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${ToCurr.value.toLowerCase()}.json`;
// let responce = await fetch(URL);
// let data = await responce.json();
// let reat = data[ToCurr.value.toLowerCase()];
// console.log(data);

//modified code 
const from = fromCurr.value.toLowerCase();
const To =ToCurr.value.toLowerCase();
const URL=`${BASE_URL}/${from}.json`;

let responce = await fetch(URL);
let data = await responce.json();
let rate = data[from][To];
// console.log(rate);
// console.log(amount);


let finalamount= amtVal * rate;
msg.innerText=`${amtVal}/${fromCurr.value} = ${finalamount} /${ToCurr.value}`

}

const updateFlag = (element)=>{
let currCode =element.value;
let countryCode= countryList[currCode];
let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`
let img = element.parentElement.querySelector("img");
img.src= newSrc;
};

btn.addEventListener("click", (evt)=>{
 evt.preventDefault();//pahile je kam button click kelya vr hot hote te yachya mule nahi honar aata aaplya la je karayche aahe te cha hoil click kelya vr karan bydefault form cha button he submit karte form ty cha behavior techa aasta.
 updateExchangeRate();
});

window.addEventListener("load",()=>{
    updateExchangeRate();
})