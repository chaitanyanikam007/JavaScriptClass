"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var b1 = true;
var b2 = false;
var b3;
console.log(b1); // line 5 true
console.log(b2); // line 6  false
function test() {
    return b3 = false;
    console.log(b3); // line 10 undefined //now code is not executed
}
console.log(test()); // line 14 undefined
// string datatypes
var s1 = 'you are the creater of your destiny';
var movieName = 'KGF';
var s2 = "powerful people come from powerful places- ".concat(movieName);
console.log(s1);
console.log(s2);
//any datatype in ts
var variable;
variable = 10;
console.log(variable);
variable = 'chaitanta';
console.log(variable);
variable = true;
console.log(variable);
variable = [1, 2, 3];
console.log(variable);
// unknown Data types 
var input;
console.log(input);
input = true;
console.log(input);
input = 7;
console.log(input);
input = 'codemind';
input = [1, 2, 3];
console.log(input);
// unknown is asssigned to unknown and other type values 
var a;
console.log(a);
var b = a;
console.log(b);
var c = a;
console.log(c);
// let abc : unknown;
// let num: number = abc;  //error = error TS2322: Type 'unknown' is not assignable to type 'number'.   58 let num: number = abc;
var abcd = 'hello from any';
var num5 = abcd;
console.log(typeof num5);
//union type
var sn;
sn = 'codemind';
sn = 7;
console.log(sn);
var ObjEmp = new class_1.employee(1, "chaitanya", 1000000); //ObjEmp is Object/instance of employee class
console.log(ObjEmp.id);
console.log(ObjEmp.name);
