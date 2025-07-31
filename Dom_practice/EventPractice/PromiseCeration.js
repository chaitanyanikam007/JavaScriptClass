//promise cration 

function getData(dataId,getNextdata){
return new Promise ((resolve ,reject)=>{
    setTimeout(()=>{
        // console.log("data:",dataId);
        // resolve("sucsses");
        //reject("error");
             if(getNextdata){
                 getNextdata();
                };
    },5000);

 });
}

let promise = getData(123)