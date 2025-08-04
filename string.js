var greet = "Good Morning";

console.log(`Given String is: ${greet}`);

var totalChars = greet.length;

console.log(`Total characters or length is: ${totalChars}`);


console.log("======== toLowerCase() ===========");

var greetInLowerCase = greet.toLowerCase();

console.log(`Greet in lower case: ${greetInLowerCase}`);


console.log("======== charAt() ===========");

var charAtIndex0 = greet.charAt(0);

console.log(`Char at index 0 is: ${charAtIndex0}`);

var charAtIndex10 = greet.charAt(10);

console.log(`Char at index 10 is: ${charAtIndex10}`);

 

var charAtLastIndex=greet.charAt(greet.length-1);

console.log(`Char at last index  is: ${charAtLastIndex}`);

 

var charAtIndex11=greet.charAt(101);

console.log(`Char at index 101  is: ${charAtIndex11}`);

 

var charAtIndexMinus2=greet.charAt(-2);

console.log(`Char at index minus 2  is: ${charAtIndexMinus2}`);


console.log("======== concat() ===========");

var strOne = "My";

var strTwo = " Love"

var strThree = " JavaScript"

var strConcat = strOne.concat(strTwo).concat(strThree);

console.log(`Concat: ${strConcat}`);


console.log("======== indexOf() ===========");

var greet = "Good Evening Nana";

var indexOfCharg = greet.indexOf("g")

console.log(`Index of char g: ${indexOfCharg}`);

 

var indexOfCharT = greet.indexOf("T")

console.log(`Index of char T: ${indexOfCharT}`);

 

var indexOfCharn = greet.indexOf("n")

console.log(`Index of char n: ${indexOfCharn}`);

 

var indexOfCharn = greet.lastIndexOf("n")

console.log(`Index of char n: ${indexOfCharn}`);

 

var indexOfCharNana = greet.lastIndexOf("Nana")

console.log(`Index of char Nana: ${indexOfCharNana}`);


console.log("======== replace() ===========");

var greet = "Good Morning JavaScript";

var greetReplace =greet.replace("Morning" , "Evening");

console.log(`Replace: ${greetReplace}`);

 

var greetReplace =greet.replaceAll(" " , "-");

console.log(`Replace: ${greetReplace}`);

console.log("======== trim() ===========");

var myLove = "   I Love only JS  ";

var lengthBeforeTrim = myLove.length;

console.log(`Before trim length is: ${lengthBeforeTrim}`);

var myLoveJS = myLove.trim();

var lengthAfterTrim = myLoveJS.length;

console.log(`After trim length is: ${lengthAfterTrim}`);

console.log(`Total removed spaces are: ${lengthBeforeTrim-lengthAfterTrim}`);


console.log("======== includes() ===========");

var myLove = "I love only JS no more any one";

var isJSAvailable = myLove.includes("JS");

console.log(isJSAvailable);


console.log("======== slice() ===========");

var str = "Hello JavaScript";

var slice6 = str.slice(6);

console.log(slice6);

var sliceBetween6To10 = str.slice(6, 10);

console.log(sliceBetween6To10);


console.log("======== split() ===========");

var str = "I have 100CR Property you know";

var splitResult = str.split(" ");

console.log(splitResult);

console.log(`Total number of words: ${splitResult.length}`);