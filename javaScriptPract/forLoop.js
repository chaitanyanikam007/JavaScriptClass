//program for add first n natural numbers 
const prompt = require("prompt-sync")({ sigint: true });
let n, sum = 0;
n = prompt("Enter a number :");
n = parseInt(n);
 for (let i = 0; i < n; i++) {
     sum+=(i+1);
        
 }
 
 console.log("The sum of first " + n + " natural numbers is " + sum);


 //program for for...in loop 
 let obj = {
        chaitany :90,
        devesh:80,
        kunal:35,
 }
 for (let a in obj){
    console.log(a);
    
    //or print all values key and value
    console.log("marks of " + a + " are " + obj[a]);
 }
//program for for of...loop
 for (let a of "chaitany"){
    console.log(a);
    
     }