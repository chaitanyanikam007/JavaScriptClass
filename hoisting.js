console.log(city);
var city;
// console.log(country); Not allowed
let country;
// console.log(pin); Not allowed
const pin = 411057;
console.log("======= Named Function =========");
demo();
function demo(){
    console.log("Hello buddy, I am demo...");
}
console.log("======= Function Expression =========");
test();
var test = function(){
    console.log("Hello I am inside test FE");
}