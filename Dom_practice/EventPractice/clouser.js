function abc(){
   
   accontBallence=20000;
   //console.log("your account ballence is:-"+accontBallence);
   
   function addBallance(){
    let addamount=20000

    total=accontBallence+addamount;

    console.log(`your privous account ballence is :-${accontBallence}, and now you added amount is :-${addamount}`);
     return  ` now your total ballence is:-${total}`
   };
   return addBallance();
}
const a= abc();
console.log(a);


