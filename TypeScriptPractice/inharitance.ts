class BaseEmployee{
    protected name :string;
    protected age : number;
    constructor(name:string ,age :number){
        this.name = name,
        this.age =age;
    }
    //write a method to display the details of employee
    displayDitailes(){
        console.log(`employee name is :- ${this.name}, employee age is :- ${this.age} `);
        
    }
}

class Manager extends BaseEmployee{
    private Dipartment : string ;


    constructor(name:string,age:number,dipartment:string){
       
        //colling parent class constructor using super() kyeword. 
        super(name,age);//intialize 'name' and 'age' ftom BaseEmployee class /parent class
            this.Dipartment=dipartment;
    }
//method to display the maneger deatails, through this method we are doing method 'overriding' with the same name of methods
     public override displayDitailes(){
        //using super () key word we can call the parent class method 
        super.displayDitailes();
        console.log(`dipartment is :- ${this.Dipartment}`);
        
        
    }
}


//creating one another class for brtter understand
//the developer is inherited from BaseEmployee class or parent class.
class Developer extends BaseEmployee{
    private programmingLanguage : string;//property or class member

    constructor(name:string, age: number,programingLanguag:string){
        super(name ,age);
        this.programmingLanguage= programingLanguag;
    }
    public override displayDitailes(): void {
         //now i can chang the BaseEmployee class members private to protected so i can access the parent class members easyliy,
         //becouse the protected members can be accessable only within its class or its derived('child') classs
        console.log(`the name of developer is :- ${this.name}, Age of Developer is:- ${this.age}, working Developer on :- ${this.programmingLanguage},`);
        
    }

}
//creating instance/ object of maneger 
let maneger =new Manager('chaitanya',25,'IT');
//colling a method of 'maneger class'.
maneger.displayDitailes();

const developer = new Developer('devesh',25,'anguler.ts')
developer.displayDitailes();