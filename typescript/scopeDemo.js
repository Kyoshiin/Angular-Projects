var num1 = 1;
function varDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log("num1 : " + num1); //OK
    console.log("num2 : " + num2); //OK
    console.log("num3 : " + num3); //OK
    console.log("num4 : " + num4); //OK
}
varDeclaration();
var num11 = 1;
function letDeclaration() {
    var num12 = 2;
    if (num12 > num11) {
        var num13 = 3;
    }
    while (num11 < num12) {
        var num14 = 4;
        num11++;
    }
    console.log("num11 : " + num11); //OK
    console.log("num12 : " + num12); //OK
    //   console.log("num13 : " + num13);     // num3 can access only within if block
    //  console.log("num14 : " + num14);    // num4 can access only within while block
}
console.log("num11 : " + num11); //OK
// console.log("num12 : " + num12); // num2 can access only within function block
letDeclaration();
