const prompt = require("prompt-sync")({ sigint: true });

let Choise;
let no,output;
Choise = prompt("Enter a 1 for squear and 2 for qube :");
no = prompt("Enter a number :");

//prompt("Enter a 1 for sequqre and 3 for cube");
//Choise=3;
//no=3;
switch(parseInt(Choise)){
    case 1:
        output=no*no;
        console.log("The square of "+no+" is "+output);
        break;

    case 2:
        output=no*no*no;
        console.log("The cube of "+no+" is "+output);
        break;
    default:
        console.log("Invalid choise");
        break;

}//continue;
// if (continue == "y" || continue == "n") {
//     console.log("you want to continue");
//     Choise = prompt("Enter a 1 for squear and 2 for qube :");
    
// }
