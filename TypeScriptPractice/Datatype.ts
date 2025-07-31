import { employee } from "./class";

var b1 : boolean = true;
var b2: boolean = false;
var b3: boolean;

console.log(b1);  // line 5 true
console.log(b2);  // line 6  false

 

function test() {
    return b3=false;
    console.log(b3); // line 10 undefined //now code is not executed
}
console.log(test()); // line 14 undefined


// string datatypes

var s1: string = 'you are the creater of your destiny';

var movieName = 'KGF';

var s2 : string = `powerful people come from powerful places- ${movieName}`;

console.log(s1);

console.log(s2);


//any datatype in ts
var variable :any;
 
variable=10;
console.log(variable);

variable='chaitanta';
console.log(variable);

variable = true;
console.log(variable);

variable =[1,2,3];
console.log(variable);


// unknown Data types 

let input : unknown;
console.log(input);
input = true;
console.log(input);
input = 7;
console.log(input)
input = 'codemind';
input = [1,2,3];
console.log(input);

// unknown is asssigned to unknown and other type values 
let a : unknown;
console.log(a);
let b : unknown = a;
console.log(b);
let c: any = a;
console.log(c);

// let abc : unknown;
// let num: number = abc;  //error = error TS2322: Type 'unknown' is not assignable to type 'number'.   58 let num: number = abc;
 let abcd : any='hello from any'
let num5: number = abcd;
console.log(typeof num5);

//union type

var sn : string | number;
sn = 'codemind';
sn = 7;
console.log(sn);



let ObjEmp = new employee(1,"chaitanya",1000000);//ObjEmp is Object/instance of employee class
ObjEmp.id;
ObjEmp.name;
//console.log(ObjEmp.salary); // error is showig salary is private member of class 




