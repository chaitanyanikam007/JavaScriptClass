let a=6;
let b=7;
if(a>b){
    console.log("a is greater than b");     
}
else {
    console.log("b is greater than a");
}




//else if statement
let math=92;
let english=80;
let science=70;
let total;
let persentage;
function calculate(){
    total=math+english+science;
    console.log("Total marks: "+total);
    persentage=(total/300)*100; 
    console.log("Percentage: "+persentage);
    if(persentage>=90){
        console.log("Grade A");
    }
    else if(persentage>=80 ){
        console.log("Grade B");
    }
    else if(persentage>=70 ){
        console.log("Grade C");
    }
    else if(persentage>=60 ){
        console.log("Grade D");
    }
    else if(persentage>=50 ){
        console.log("Grade D");
    }
    else if(persentage>=40 ){
        console.log("Grade D");
    }
    else{
        console.log("Grade F");
    }
      
}
 
calculate();
//<button onclick="calculate()">Show the gred</button>