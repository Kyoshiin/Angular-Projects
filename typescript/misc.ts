// the 'type of variables' that we do not know when we are writing an application.
let notSure: unknown = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
// OK, definitely a boolean
notSure = false;
console.log(notSure);
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length; //assertion
console.log(someValue +' has '+strLength+" chars.");
someValue = true;
let strlen: number = (someValue as string).length;
console.log(strlen);