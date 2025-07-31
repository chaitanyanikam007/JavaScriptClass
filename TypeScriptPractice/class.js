"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employee = void 0;
var employee = /** @class */ (function () {
    //defoult constrouctor or parameter less constroctor
    function employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    employee.prototype.display = function () {
        console.log("my name is : ".concat(this.name, ", and my company id is :-").concat(this.id, ", and my salary is :- ").concat(this.salary));
    };
    //getter method for a salayr if you want access the private class member out side the class then you want to write getter and setter method.
    employee.prototype.getsalary = function () {
        return this.salary;
    };
    // setter method is use to update the value of your class private members. 
    employee.prototype.setsalary = function (newsalary) {
        newsalary > 0 ? this.salary = newsalary : console.log("please enter the valid salary!");
    };
    return employee;
}());
exports.employee = employee;
//create a instance /object of this class
var emp = new employee(1, 'devesh', 100000);
emp.name = "chaitanya";
emp.id = 2;
emp.setsalary(120000);
emp.display();
