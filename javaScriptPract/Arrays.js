//write porgram for arrays and methods of arrays
// program for arrays
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple    
console.log(fruits[1]); // Output: banana
console.log(fruits.length); // Output: 3
console.log(fruits.includes('banana'));
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]
fruits.pop();   
console.log(fruits); // Output: ["apple", "banana", "cherry"]
fruits.unshift("mango");
console.log(fruits); // Output: ["mango", "apple", "banana", "cherry"]
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "cherry"]
fruits.splice(1, 1); // Remove 1 element at index 1
console.log(fruits); // Output: ["apple", "cherry"]
fruits.splice(1, 0, "banana"); // Add "banana" at index 1
console.log(fruits); // Output: ["apple", "banana", "cherry"]
console.log(fruits.length); // Output: 3
console.log(fruits.includes("banana")); // Output: true
console.log(fruits.includes("grape")); // Output: false
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("grape")); // Output: -1
console.log(fruits.join(", ")); // Output: apple, banana, cherry
console.log(fruits.reverse()); // Output: ["cherry", "banana", "apple"]


   

