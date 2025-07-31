function Star(){
    for(let i = 5; i > 0; i--){
        let row="";
        for (let j = 0; j < i; j++) {
            
            row += "*";
        }
        console.log(row);
    }
}
Star();
//output: 
// *****
// ****
// ***
// **
// *
 
function star() {
    for(let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
star();
//output:
// *
// **
// ***
// ****