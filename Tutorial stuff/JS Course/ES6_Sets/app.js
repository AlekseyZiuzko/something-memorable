// SETS - Store unique values of any type

const set1 = new Set();

// Add values to Set
set1.add(100);
set1.add("string");
set1.add({ name: "John" });
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, "string"]);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100)); // true
// console.log(set1.has(150 - 50)); // true
// console.log(set1.has({ name: "John" })); // false - cause objects are not primitive values

// Delete from a Set
// set1.delete(100);

// console.log(set1);

// ITERATE THROUGH SETS

// For...of
// for (let item of set1.entries()) {
//     console.log(item);
// }

// forEach
// set1.forEach((item) => {
//     console.log(item);
// });

// CONVERT SETS TO ARRAYS

const setArr = Array.from(set1);

console.log(setArr);
