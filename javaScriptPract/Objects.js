//write a progtam to create an object and access its properties
let person = {
    name: "chiatanya",
    age: 25,
    city: "pune",
    isDevelopre: true,
    salary : function(){
        return 100000;
    }
};
// Accessing object properties
console.log(person.name); // Output: chaitanya
console.log(person["age"]); // Output: 25
console.log(person.city); // Output: pune
console.log(person.isDevelopre); // Output: true
// Adding a new property
person.country = "India";
console.log(person.country); // Output: India
// Updating an existing property
person.age = 26;
console.log(person.age); // Output: 26
// Deleting a property
delete person.country;
console.log(person.country); // Output: undefined
// Checking if a property exists
console.log(person.hasOwnProperty("name")); // Output: true 
//you can also use the 'in' operator to check if a property exists
console.log("country" in person); // Output: false
// Looping through object properties

console.log(person.salary()); // Output: 100000

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: chaitanya
// age: 26
// city: pune
// isDevelopre: true 