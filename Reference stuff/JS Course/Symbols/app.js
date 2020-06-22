// Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol("sym2");

// console.log(typeof sym2);

// console.log(Symbol("123") === Symbol("123"));
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

myObj[KEY1] = "Prop1"; // to use Symbol not as a property
myObj[KEY2] = "Prop2";
myObj.KEY3 = "Prop3";
myObj.KEY4 = "Prop4";

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for..in
// for (let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are igrnored by JSON.stringify()
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" }));
