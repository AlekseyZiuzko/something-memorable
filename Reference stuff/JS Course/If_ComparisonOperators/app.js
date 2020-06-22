const id = 100;

// Equal to
// if (id == 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Not equal to
// if (id != 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Equal to value and type
// if (id === 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Not equal to value and type
// if (id !== 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// Check if undefined
// if (typeof id !== "undefined") {
//     console.log(`The id is: ${id}`);
// } else {
//     console.log("no id");
// }

// Greater or Less than
// if (id <= 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

const color = "yellow";

// if (color === "red") {
//     console.log("color is red");
// } else if (color === "yellow") {
//     console.log("color is yellow");
// } else {
//     console.log("color is not red or yellow");
// }

//Logical operators
const name = "Claudia";
const age = 18;

// AND &&
if (age > 0 && age < 18) {
    console.log(`${name} is too young for me`);
} else if (age >= 18 && age <= 25) {
    console.log(`I have to Marry ${name} Quick!`);
} else {
    console.log(`Gotta keep Praying for a beautiful ${name}`);
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? "correct" : "incorrect");

// WITHOUT BRACES  NOT SUGGESTED THO
if (id === 100) console.log("CorrectoMundo");
else console.log("IncorrectoMundo");
