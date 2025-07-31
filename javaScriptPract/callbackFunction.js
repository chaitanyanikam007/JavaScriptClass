//callback function 
function add(a,b){
    return a + b;
}
function display(a,b,callback){
    let result =callback(a,b);
    console.log(result);
    
}
display(5101,99,add);
