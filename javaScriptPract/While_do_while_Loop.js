// //program for while loop
// const prompt = require("prompt-sync")({ sigint: true });
// let n=prompt("Enter number of n:");
// n=parseInt(n);
// let i=0;
// while(i<n){

//     console.log(i);
//     i++;
// }
// console.log("working do...while loop");

// //porgram for do while loop

// let a=prompt("Enter a number :");
// a=parseInt(a);
// let j=0;
// do{
//     console.log(j);
//     j++;
// }while(j<a){

//     if(j>a)
//     {
//         console.log("j is not less than a");
        
//     }
//     else
//     {
   
//    console.log("j is less than a");

//     }
    

// }
   
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Skips 3
}
