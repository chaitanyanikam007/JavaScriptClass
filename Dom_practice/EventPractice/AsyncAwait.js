// //run event.html and open console on your web page. becouse the path of this script file given to those html file.

// // synchronous (bolcking) can block the code when your opretion is not performed if your action is done then it will go next execution 
// // that means it is blocking the next opretion.

// // console.log("start");
// // alert("blocking...")
// // console.log("end");//waite for alert close. then perform.


// //Asynchronous (non-Blocking)
// console.log("start ");
// setTimeout(()=>{
// alert("blocking... inside the setTimeout");
// },2000);
// setTimeout(()=>{
// console.log("end");
// },1000);


// //it can run the function ripetedly (it can reped the code again again.) after decided time.,it like a loop.
// // setInterval(()=>{
// // console.log("run every one sec");

// // },1000)



// //callback hell problem of callback.
// function getData(dataId, getNextdata){
// setTimeout(()=>{
//     console.log("data:",dataId);
//     if(getNextdata){
//         getNextdata();
//     };
// },2000);

// }

// //nested callbacks are called callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         });
//     });
// });




// //imp we can not create the promises we can only use it and how to use it is define hear.

// function getaPromise(GetId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data: ",GetId);
//             resolve("sucsses");
//             reject("network error is ocuerd")
//         },5000)
       
//     });
// }

// getaPromise(1).then((res)=>{
//    return getaPromise(2).then(()=>{
//         return getaPromise(3).then(()=>{
//             return getaPromise(4);
           
//         });
//    });
// });

// getaPromise.catch((err)=>{
//     console.log("come error ocuerd",err);
    
// })



// in the promise chain and callback hell code is very complex, to solve the complaxcity of the code we can use "async- await" uderstant through the following ex.


function  getaPromise1(GetId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data: ",GetId);
            resolve("sucsses");
           // reject("network error is ocuerd")
        },2000)
       
    });
}

async function getAlldata() {
    console.log("getting data 1...");
    await getaPromise1(1);
    console.log("getting data 2...");
    await getaPromise1(2);
    console.log("getting data 3...");
    await getaPromise1(3);
    console.log("getting data 4...");
    await getaPromise1(4)
    console.log("getting data 5...");
    await getaPromise1(5)
}
//getAlldata()


//example of "IIFE" ,it will be execute automatically we didn`t want to call it this is anonumous function.
(async function () {
    console.log("getting data 1...");
    await getaPromise1(1);
    console.log("getting data 2...");
    await getaPromise1(2);
    console.log("getting data 3...");
    await getaPromise1(3);
    console.log("getting data 4...");
    await getaPromise1(4)
    console.log("getting data 5...");
    await getaPromise1(5)
})();