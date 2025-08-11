console.log("======== break ==================");

for (let index = 0; index <= 3; index++) {
    if (index==1) {
        break;
    }
    console.log(index);
}
console.log("======= continue ===============");

for (let index = 0; index <= 3; index++) {
    if (index==1) {
        continue;
    }
    console.log(index);
}

console.log("======= continue ===============");
for (let index = 1; index <= 5; index++) {
    if (index%2==0) {
        continue;
    }
    console.log(index);
}