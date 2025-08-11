if(true){
    var n1= 5;
    let n2= 55;
    const n3 = 555;
    console.log(n1,n2,n3);
    
    
}
// console.log(n1,n2,n3);



console.log("========= 1. Variable Declaration ==========");

var n1;

let n2;

// const n3;  // Not allowed 

 

console.log("========= 2. Variable Declaration and Initialization on the same line ==========");

var n4 = 10;

let n5 = 20;

const n6 = 30;

console.log(n4, n5, n6);

 

console.log("======= 3. Variable Re declaration ============");

var n4 = 10;

// let n5 = 20;  // Not allowed

// const n6 = 30; // Not allowed

 

console.log("======= 4. Update  ============");

var n7= 100;

let n8 = 200;

const n9 = 300;

n7 = 400; 

n8 = 600;

// n9 = 700;

console.log(n7, n8);

console.log(n9);


console.log("======= 5. Scope  ============");

function addition(){

    var numOne = 10;

    let numTwo = 20;

    const numThree = 30;

    console.log(` Sum of ${numOne}, ${numTwo}, ${numThree} is: ${numOne + numTwo + numThree}`);

}

addition();

// console.log(` Sum of ${numOne}, ${numTwo}, ${numThree} is: ${numOne + numTwo + numThree}`);

 

let isMarried = true;

if (isMarried) {

    var budget = "1CR";

    let expenses = "50Lakh";

    const amountRemaining = "50Lakh";

    console.log(`Total budget is: ${budget}`);

    console.log(`Total expected expenses is: ${expenses}`);

    console.log(`Total Remaining is: ${amountRemaining}`);

}

console.log(`Total budget is: ${budget}`);

//console.log(`Total expected expenses is: ${expenses}`);

// console.log(`Total Remaining is: ${amountRemaining}`);