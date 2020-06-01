// Constructor function
// function Person(name, dob) {
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function () {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     };
// }

// const brad = new Person("Brad", 36);
// const john = new Person("John", 30);

// console.log(john);

// const brad = new Person("Brad", "9-10-1980");
// console.log(brad.calculateAge());

// BUILT IN CONSTRUCTORS
// String

const name1 = "Jeff";
const name2 = new String("Jeff");

// name2.foo = "bar";
// console.log(name2);

// if (name2 === "Jeff") {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(false);

// Function
const getSum1 = function (x, y) {
    return x + y;
};

const getSum2 = new Function("x", "y", "return x + y");

// console.log(getSum2(1, 1));

// Object
const john1 = {
    name: "John",
};
const john2 = new Object({ name: "John" });

// Array
const arr1 = [1, 2, 3];
const arr2 = new Array([1, 2, 3]);

// Regular expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");
