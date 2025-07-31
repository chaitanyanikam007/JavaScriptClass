// // //getting elements from html by Id

// const Heading = document.getElementById('Heading')
// console.log(Heading);

// // //getting element from html from tagsS
//  const heading = document.getElementsByTagName("h2")
//  console.log(heading);
 
// console.log(typeof heading);
//  // returns object
// //getting element from html from class
// const headingClass = document.getElementsByClassName("heading")
// console.log(headingClass);
// // returns HTMLCollection, which is an array-like object
// //getting element from html by query selector
// const headingQuery = document.querySelector(".heading");
// console.log(headingQuery);
// // returns the first element that matches the selector

// //getting element from html by query selector all
// const headingQueryAll = document.querySelectorAll(".heading");  
// console.log(headingQueryAll);
// // returns a NodeList, which is similar to an array but not exactly the same




const heading = document.querySelector(".heading");

const parent =heading.parentElement;
console.log("log1", parent);


// returns the parent element of the heading
const children = parent.children;
console.log("log2",children);
// returns a live HTMLCollection of the child elements of the parent

// or
console.log("log3", parent.childNodes);
// returns a live NodeList of the child nodes of the parent, including text nodes


//next sibling

const nextSibling = document.querySelector(".heading").nextElementSibling;
console.log(nextSibling.nextElementSibling);
// returns the next sibling element of the heading, and then the next sibling of that element

//previous sibling
const previousSibling = document.querySelector("h3").previousElementSibling;
console.log(previousSibling.previousElementSibling);
//`// returns the previous sibling element of the h3 element

//manipulating elements
const changeText = document.querySelector(".heading");
heading.innerText = "New Heading Text";
console.log(changeText.innerText);
// changes the text content of the heading element
//to change the css of the element, you can use the style property
changeText.style.color = "blue";
changeText.style.fontSize = "100pxS";
// changes the color and font size of the heading element

//adding a class to an element
heading.classList.add("new-class");
// to add a class to an element, you can use the classList property
const h3 = document.querySelector("h3");
h3.classList.add("title");

//to remove a class from an element, you can use the classList property
h3.classList.remove("title");


const container = document.querySelector(".container");
//to create a new element, you can use the createElement method

// and then append it to the container
container.appendChild(heading);
// to append an element to the container, you can use the appendChild method
// to create a new element and set its content, you can use the innerHTML property
const newElement = document.createElement("p");
newElement.innerHTML="This is a new paragraph element created using JavaScript.";
container.appendChild(newElement);
// to remove an element from the container, you can use the removeChild method
//body.removeChild(container);

// const html= document.querySelector("html");
// html.removeChild(body);
// to remove an element from the body, you can use the removeChild method

// const body = document.querySelector("body");
// const newHeading = document.createElement("h4");
// newHeading.innerText = "This is a new heading element created using JavaScript.";
// body.appendChild(newHeading);
// body.removeChild(newHeading);


//to write line to adjescent HTML, you can use the insertAdjacentHTML method
//container.insertAdjacentElement("beforebegin", newElement);
// this will insert the new element before the container element
//container.insertAdjacentElement("afterbegin", newElement);
// // this will insert the new element at the beginning of the container element
//container.insertAdjacentElement("beforeend", newElement);
// // this will insert the new element at the end of the container element
container.insertAdjacentElement("afterend", newElement);
// // this will insert the new element after the container element

//to write a code for DOM Event, you can use the addEventListener method
const button = document.querySelector("#btn");
//const heading = document.querySelector("#Heading");
button.addEventListener("click", function(Event) {
    console.log("Button clicked!", Event);
    heading.style.color = "red"; 
    // this will change the color of the heading to red when the button is clicked
    heading.style.fontSize = "50px";

    // this will show an alert when the button is clicked
});

