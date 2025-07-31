var message = 'Hello, Typescript';
console.log(message);
// Data Types 
function addNum(num1, num2) {
    // console.log(num1+num2);
    return 10 + 20;
}
var res = addNum(10, 20);
console.log(res); // undefined
var b1 = true;
var b2 = false;
var b3;
console.log(b1); // line 5 true
console.log(b2); // line 6  false
function test1() {
    console.log(b3); // line 10 undefined 
}
console.log(test1()); // line 14 undefined
function test() {
    return b3 = false;
    console.log(b3); // code will not execute 
}
console.log(test());
