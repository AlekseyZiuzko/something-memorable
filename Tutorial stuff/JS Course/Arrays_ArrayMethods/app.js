// Create some Arrays (Both are Arrays)
const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbers2 = new Array(8, 9, 10, 11, 12); // Array Constructor
const fruit = ["Apple", "Banana", "Orange", "Blueberries"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// console.log(mixed);

// Array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(100);

// MUTATING ARRAYS
// Add on to the end of array
// numbers.push(8);

// // Add on to front
// numbers.unshift(0.2);

// // Take off from end
// numbers.pop();

// // Take off from start
// numbers.shift();

// // Splice values
// numbers.splice(2, 2); // (start, finish)

// // Revers
// numbers.reverse();

// Concatenate
val = numbers.concat(numbers2);

// Sort
// val = fruit.sort();
// val = numbers.sort();

// // Use the compare function
// val = numbers.sort((x, y) => {
//     return x - y;
// });

// // Revers sort
// val = numbers.sort((x, y) => {
//     return y - x;
// });

// Find
function over50(num) {
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
