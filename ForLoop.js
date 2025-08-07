console.log(`======== 1 to 10 ============`);
for (var index = 1; index < 11; index++) {
    console.log(index); 
}

console.log(`======== 2 4 6 8 10 ----- 20 ============`);
for (var index = 2; index <= 20; index=index+2) {
    console.log(index); 
}

// for (var index = 1; index <=10; index=index+1) {
//     console.log(index*2); 
// }

console.log(`====== Table of 5 =========`);
for (let i = 1; i<=10; i++) {
    console.log(5*i); 
}
// 5 * 1. == 5
// 5 * 2. == 10
// 5 * 3. == 15
// 5 * 4. == 20

// 5 * 10 == 50


console.log(`====== 10 to 1 =========`);
// 10 9 8 7 6  5 4. 3 2 1
for (let i = 10; i>=1; i--) {
    console.log(i); 
}