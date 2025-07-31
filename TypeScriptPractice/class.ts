

export class employee{
    id:number;
    name : string;
    private salary: number;

//defoult constrouctor or parameter less constroctor
    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    display(){
        console.log(`my name is : ${this.name}, and my company id is :-${this.id}, and my salary is :- ${this.salary}`);
        
    }
    //getter method for a salayr if you want access the private class member out side the class then you want to write getter and setter method.

    getsalary(){
       return this.salary;
    }
      // setter method is use to update the value of your class private members. 
    setsalary( newsalary: number){
        newsalary >0 ?this.salary =newsalary: console.log("please enter the valid salary!");
        
    }
     
}


//create a instance /object of this class
let emp = new employee(1,'devesh',100000);
emp.name = "chaitanya";
emp.id = 2
emp.setsalary(120000);
emp.display();