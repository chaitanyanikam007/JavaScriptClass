let a= 10;


function greet(){
    const b=20 
    const c=30
    console.log(a,b,c);



     return function (){
        add=a+b+c;
    console.log("addition of all 3 no :",add);
      //  return console.log("addition of all 3 no :",add);

    };
 //if you want use only laxical scop thnen remove return only and add function name like function addition() on anoniyomus function
    addition();
}

const innerfun = greet();

 innerfun();