// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

// // Variable can include letters, numbers, _, $
// // They cannot start with a number

// // Multi word vars
// var firstName = 'John'; // Camel case (Good Suggestion)
// var first_name = 'Sara' // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname; // Not Recommended

// // LET
// // let name;
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST

// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara'; name was used already
// Have to assign a value
// const greeting;

const person = {
  name: "John",
  age: 30,
};

person.name = "Sara"; //We can change the name in const but not reassign (change data in object)
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // push method to add into an array in the end

console.log(numbers);
