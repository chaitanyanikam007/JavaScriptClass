console.log("============== FE Assignment square 1 ==================");

square = (n) => console.log(`Square of ${n} : ${n * n}`);

square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log("============== FE Assignment Typeof 2 ==================");

console.log(`Type of square function is ${typeof square}`);

console.log(
  "============== FE Assignment area of rectangle 3 =================="
);

areaReactangle = (l, w) => {
  console.log(`given length is ${l} and width is ${w}`);
  console.log(`Area of rectangle is : ${l * w}`);
};

areaReactangle(499, 917);

console.log("============== FE Assignment Swap 4 ==================");

swap = (n1, n2) => {
  let temp;
  console.log(`before swaping : ${n1} ${n2}`);

  temp = n1;
  n1 = n2;
  n2 = temp;
  console.log(`after swaping : ${n1} ${n2}`);
};

swap("mahi", "Virat");
swap(7, 18);

console.log("============== FE Assignment operations on string using FE 5 ==================");

stringops =(str)=>{
    console.log(`Total Character of String ${str.trim().length-1}`);
    console.log(`Character of index 6 is ${str[6]}`);
    console.log(`Character of index 11 is ${str[11]}`);
    console.log(`Last Character of index is ${str[str.trim().length-1]}`);
    console.log(`First Character of index is ${str[0]}`);
    console.log(`Third last Character of index is ${str[str.trim().length-4]}`);
    word = str.trim().split(" ");
    wordCount = word.length-1
    console.log(`Total Words in given string ${wordCount}`);
    console.log(`Square of Word Count ${wordCount*wordCount}`);
    
}

stringops("js the most popular language of internet")