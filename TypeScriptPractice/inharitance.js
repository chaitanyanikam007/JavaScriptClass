var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseEmployee = /** @class */ (function () {
    function BaseEmployee(name, age) {
        this.name = name,
            this.age = age;
    }
    //write a method to display the details of employee
    BaseEmployee.prototype.displayDitailes = function () {
        console.log("employee name is :- ".concat(this.name, ", employee age is :- ").concat(this.age, " "));
    };
    return BaseEmployee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, dipartment) {
        //colling parent class constructor using super() kyeword. 
        var _this = _super.call(this, name, age) || this; //intialize 'name' and 'age' ftom BaseEmployee class /parent class
        _this.Dipartment = dipartment;
        return _this;
    }
    //method to display the maneger deatails, through this method we are doing method 'overriding' with the same name of methods
    Manager.prototype.displayDitailes = function () {
        //using super () key word we can call the parent class method 
        _super.prototype.displayDitailes.call(this);
        console.log("dipartment is :- ".concat(this.Dipartment));
    };
    return Manager;
}(BaseEmployee));
//creating one another class for brtter understand
//the developer is inherited from BaseEmployee class or parent class.
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, programingLanguag) {
        var _this = _super.call(this, name, age) || this;
        _this.programmingLanguage = programingLanguag;
        return _this;
    }
    Developer.prototype.displayDitailes = function () {
        //now i can chang the BaseEmployee class members private to protected so i can access the parent class members easyliy,
        //becouse the protected members can be accessable only within its class or its derived('child') classs
        console.log("the name of developer is :- ".concat(this.name, ", Age of Developer is:- ").concat(this.age, ", working Developer on :- ").concat(this.programmingLanguage, ","));
    };
    return Developer;
}(BaseEmployee));
//creating instance/ object of maneger 
var maneger = new Manager('chaitanya', 25, 'IT');
//colling a method of 'maneger class'.
maneger.displayDitailes();
var developer = new Developer('devesh', 25, 'anguler.ts');
developer.displayDitailes();
