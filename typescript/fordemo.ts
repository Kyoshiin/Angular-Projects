let numArr = [1, 2, 3, 4, 5];
console.log("Simple for loop");
for (let index = 0; index < numArr.length; index++) {
    console.log(numArr[index]);
}
console.log("\nfor in loop");
for (const i in numArr) {
    console.log(numArr[i]);
}
console.log("\nfor of loop");
for (const n of numArr) {
    console.log(n);
}
console.log("\nfor each loop");
numArr.forEach(function (value) {
    console.log(value); // [1,2,3,4,5];
});
