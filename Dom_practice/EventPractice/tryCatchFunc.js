
// //let a=60;
// setTimeout(()=>{
// console.log(`1`);

// })


// setTimeout(()=>{
// console.log(`2`);

// },2000)

// setTimeout(()=>{
// console.log(`3`);

// },3000)

// setTimeout(()=>{
//     try {
 
//        console.log(a);
//     } catch (error) {

//     console.log(`tuni bahina pahile a difain karel she ka te dakh ...`+error);
//     }
// },4000)


// setTimeout(()=>{
// console.log(`4`);

// },5000)


//finally block


try{
    //if any error will be occured in this code then 
    console.log("Risky code runnig");
    //asume some oprations will be faill
    throw new Error("custom error");
    
}catch(err){
console.log("caught error",err.massage);

} finally{
    // this code always run becouse the finally can hold always true logic
    console.log("this always run");
    
}