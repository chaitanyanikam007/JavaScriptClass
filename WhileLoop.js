// init
var i = 1;
while (i<=10) {
    console.log(i);
    // update expression
    i++
}

console.log(`==== Find first 15 odd numbers ========`);
var oddCount = 0;
var i = 1;
while (oddCount<=15) {
    if (i%2==1) {
        console.log(i);
        oddCount = oddCount+1; 
    }
    // update 
    i++;
}