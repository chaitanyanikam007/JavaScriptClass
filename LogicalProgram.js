console.log("========= Reverse String ===========");
var str = "My Love";
var reverse = "";
for (let index = str.length-1; index >=0; index--) {
   reverse = reverse + str.charAt(index);
}
console.log(reverse);


console.log("========= Count the Char a  ===========");
var fruit = "Banana";
var countOfA = 0;
for (let index = 0; index < fruit.length; index++) {
    var char =fruit.charAt(index);
    if (char == 'a') {
        countOfA = countOfA+1;
    } 
}
console.log(`Count of char a : ${countOfA}`);


console.log("========= Count the vowels  ===========");
var greet = "Good Morning Andy";
var vowels = "aeiou";
var vowelsCount = 0;
for (let index = 0; index < greet.length; index++) {
    var char = greet.charAt(index).toLowerCase();
    if (vowels.includes(char)) {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Vowels count: ${vowelsCount}`);