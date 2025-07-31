


export enum gender{
    male =`male`,
    female=`female`
}
class Employee{
    EmpId: number;
   private EmpSalary : number;
    EmpName:string;
    Gender : gender ;


    constructor(Id:number,salary:number,name:string,Gender:gender){
         this.EmpId = Id;
         this.EmpName=name;
         this.EmpSalary=salary;
         this.Gender = Gender;

    }
    show(){
        console.log(`my id :-${this.EmpId},my name is :-${this.EmpName},my salary is :-${this.EmpSalary},and i am :-${this.Gender} person.`);
        
    }
    private CalculeteBonus(){
       return this.EmpSalary *0.5;
    }
}

let employee= new Employee(1, 20000,'chaitanya',gender.male)
employee.show();