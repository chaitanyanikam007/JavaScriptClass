function reverseNumber() {
  let reversed = 0;
  let num=1234;
  let digit;
    while(num>0){
        digit =num%10;
        reversed = reversed*10 + digit;
        num = Math.floor(num/10);
    }
    return reversed;
}

console.log(reverseNumber());