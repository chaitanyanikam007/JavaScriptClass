const URL="https://jsonplaceholder.typicode.com/users";

const fact= document.querySelector("#fact");
const btn =document.querySelector("button")

const getData = async ()=>{
    console.log("geting data...");
    let responce = await fetch(URL);
    console.log(responce);
    let data = await responce.json();//json format data convert into js object. 
    //console.log(data[0].name);//inedex no varun konti filed pahije aahe te mention kela aahe.(.name) he tumhala 0 index vr cha name return karen.
    fact.innerText= data[0].name;
}
btn.addEventListener("click",getData)

// getData();