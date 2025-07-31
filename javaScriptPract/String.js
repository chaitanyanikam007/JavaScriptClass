//write a program for strings and methods of strings
let str = "chaitanya";

//methods of strings
console.log(str.length); // Output: 9
console.log(str.toUpperCase()); // Output: CHAITANYA
console.log(str.toLowerCase()); // Output: chaitanya
console.log(str.charAt(0)); // Output: c
console.log(str.indexOf("a")); // Output: 2
console.log(str.lastIndexOf("a")); // Output: 8
console.log(str.slice(0, 5)); // Output: chait
console.log(str.substring(0, 5)); // Output: chait
console.log(str.includes("a")); // Output: true
console.log(str.startsWith("c")); // Output: true
console.log(str.endsWith("a")); // Output: true
console.log(str.split("")); // Output: ["c", "h", "a", "i", "t", "a", "n", "y", "a"]
console.log(str.replace("a", "o")); // Output: choitanya
console.log(str.repeat(2)); // Output: chaitanyachaitanya
console.log(str.trim()); // Output: chaitanya
console.log(str.trimStart()); // Output: chaitanya

