function factWordCount(str){
     if (str===null || str===undefined){
        console.log(`invalid input "unhappy scenario"`);
        return;
    }
    let fact=1;
    let array=[];
   
    for(let i=0;i<=str.length;i++){
       array = str.split(" ");
    }
    
    console.log("Array length:", array.length);
    
    for(let i=1; i<=array.length;i++){
     fact= i*fact;
    }
   
    console.log("Result:", fact);
}

factWordCount("Revision is the mother of Success");
factWordCount("we never fail, we always learn,mind it");
factWordCount("Chaitnaya kailas nikam");
factWordCount();
factWordCount(null);

