function facrotial(num){
     fact=1;
        for(let i =num; i>=1;i--){
        fact= i*fact; 
    }
           if(num===null || num===undefined){
        console.log(`Invalid input " Unhappy Scenrio"`);
    }
           if(num!=null || num!=undefined){
        console.log(fact);
        
    }
    
}
facrotial(5);
facrotial(3);
facrotial(null);
facrotial(undefined);
facrotial(9);
facrotial(0);



   