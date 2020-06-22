// const sayHello = function () {
//     console.log("Hello!");
// };

// const sayHello = () => {
//     console.log("Hello!");
// };

//One line function does not need braces
// const sayHello = () => console.log("Hello!");

// One line returns
// const sayHello = () => "Hello!";

// Return object
// const sayHello = () => ({
//     msg: "Hello!",
// });

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) =>
//     console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Brad", "Pit");

const users = ["Nathan", "John", "Tom"];

// const nameLength = users.map(function (name) {
//     return name.length;
// });

// Shorter
// const nameLength = users.map((name) => {
//     return name.length;
// });

//Shortest
const nameLength = users.map((name) => name.length);

console.log(nameLength);
