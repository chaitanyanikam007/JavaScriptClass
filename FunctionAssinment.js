
console.log('---------------- Function Assignmet ------------------------');
console.log('---------------- Task 1 Function Without parameter  ------------------------');

console.log("Function : show()");

function show (){
  console.log('From Show');
}
show()
console.log("Function : greet()");
function greet(){
  console.log('Good Afternoon');
}
greet()

console.log('---------------- Task 2 Function With parameter  ------------------------');

function firsname(firstname){
  console.log(`First Name Is ${firstname}`);
}

firsname("Chaitanya")

function lastname(lasttname){
  console.log(`last Name Is ${lasttname}`);
}

firsname("Nikam")

function collegename(collegename){
  console.log(`My college Name Is ${collegename}`);
}

collegename("Shram Sadhna Bombay Trust")

console.log('---------------- Task 3 Function With parameter and return type ------------------------');

function addnum(n1,n2,n3){
  console.log("Addition of addnum Function",n1+n2+n3);
}
addnum(10.23,600,40)

function addstr(n1,n2,n3){
  console.log("Addition of addstr Function",n1+n2+n3);
}
addnum("Hello","Good","Morning")
