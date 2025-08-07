var OddEvenCheck = function ifelseHandson(number){
    if (number%2==0) {
        console.log(`${number} is Even`);
        
    } else {
        console.log(`${number} is Odd`);
    }

}

OddEvenCheck(45);
OddEvenCheck(70);
OddEvenCheck(67);
OddEvenCheck(98);
console.log("--------------------------------------------------------------------------------------");


var VoteEligibility = function vote(age){
    if (age>=18) {
        console.log(`age is ${age} so Person is Eligible for vote`);
        
    } else {
        console.log(`age is ${age} so Person is NOT Eligible for vote`);
    }

}

VoteEligibility(18);
VoteEligibility(17);
VoteEligibility(20);
VoteEligibility(40);

console.log("--------------------------------------------------------------------------------------");

var checkCharacters = function string(str){
if (str.length>10) {
    console.log(`String contains more than 10 characters`);
    
} else {
    console.log(`String does not contain more than 10 characters`);
}
}

checkCharacters("JavaScript-ES6")

console.log("--------------------------------------------------------------------------------------");

var startWith = function startingWith(str){
    if (str.startsWith("Java")) {
        console.log(`${str} starts with Java`);
        
    } else {
         console.log(`${str} does not start with Java`);
    }
}

startWith("JavaScript language");
startWith("Programming language")