// MAPS = key-value pairs - can use ANY type as a key or a value

const map1 = new Map();

// Set Keys
const key1 = "string",
    key2 = {};
key3 = function () {};

// Set Map values by key
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// Get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Count values
// console.log(map1.size);

// ITERATING MAPS

// Loop using for..of to get and values
// for (let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for (let key of map1.keys()) {
//     console.log(`${key}`);
// }

// Iterate keys only
// for (let value of map1.values()) {
//     console.log(`${value}`);
// }

// Loop with forEach
// map1.forEach((value, key) => {
//     console.log(`${key} = ${value}`);
// });

// CONVERT MAPS TO ARRAYS

// Create and array of key-value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// Create and array of values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create and array of keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
