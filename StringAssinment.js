function stringBasics(){
    var myDreamCompany="TCS"
    console.log(myDreamCompany);

    var hobbi1="Lessning Music";
    var hobbi2="Playing Football";
    var hobbi3="Code for my project";

    console.log(hobbi1,hobbi2,hobbi3);
    console.log(`total no of carecter avalable in All 3 hobies =${hobbi1.length+  hobbi2.length+hobbi3.length }`);
}
stringBasics();

function StringHansOn(){
    var str= "   Hey you are doing good, keep it up   ";
    console.log(str);
    console.log(str.length);
    var myStr=str.trim();
    console.log(myStr);
    console.log(myStr.length);
    console.log(myStr.charAt(0),myStr[myStr.length-1]);
    let word=myStr.split(" ");
    let count=0;
    for(let i =0 ; i<word.length; i++){
    count++
    
}
 console.log(count);  
 console.log(myStr.search("good"));

 console.log(myStr.substring(22));
 console.log(myStr.endsWith("up"));
 console.log(myStr.startsWith("Hey"));


}
StringHansOn();