// Destructuring Assignment

// let a, b;
// [a, b] = [100, 200];

// Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(rest);

// Array Destructuring

// const people = ["John", "Jill", "Jack"];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returne from function

// function getPeople() {
//     return ["John", "Jill", "Jack"];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
    name: "John",
    age: 22,
    city: "Kyiv",
    gender: "Male",
    sayHello: function () {
        console.log("Hello");
    },
};

// ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;

// ES6
const { name, age, city, sayHello } = person;
console.log(name, age, city);
sayHello();
