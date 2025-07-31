// export enum gender{
//     male =`male`,
//     female=`female`
// }
var Employee1 = /** @class */ (function () {
    function Employee1(Id, salary, name, Gender) {
        this.EmpId = Id;
        this.EmpName = name;
        this.EmpSalary = salary;
        this.Gender = Gender;
    }
    Employee1.prototype.show = function () {
        console.log("my id :-".concat(this.EmpId, ",my name is :-").concat(this.EmpName, ",my salary is :-").concat(this.EmpSalary, ",and i am :-").concat(this.Gender, " person."));
    };
    Employee1.prototype.CalculeteBonus = function () {
        return this.EmpSalary * 0.5;
    };
    return Employee1;
}());
var employee = new Employee(1, 20000, 'chaitanya', gender.male);
employee.show();
