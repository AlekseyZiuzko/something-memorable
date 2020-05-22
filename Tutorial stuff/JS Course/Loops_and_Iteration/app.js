// FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     if (i === 2) {
//         console.log("2 is my favorite number");
//         continue; //continue to next iteration
//     }

//     if (i === 8) {
//         console.log("Stop the loop");
//         break;
//     }
//     console.log("Number " + i);
// }

// WHILE LOOP

// let i = 0;

// while (i < 10) {
//     console.log(`Number ${i}`);
//     i++;
// }

// DO WHILE
// let i = 0;

// do {
//     console.log("Number " + i);
//     i++;
// } while (i > 10);

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(`Car is ${cars[i]}`);
// }

// let i = 0;
// while (i < cars.length) {
//     console.log(`Car is ${cars[i]}`);
//     i++;
// }

//forEach;
// cars.forEach(function (car, index, array) {
//     console.log(`${index}: ${car}`);
//     console.log(array);
// });

// MAP
// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Sara" },
//     { id: 3, name: "Karen" },
//     { id: 4, name: "Benny" },
// ];

// const ids = users.map(function (user) {
//     return user.id;
// });

// console.log(ids);

// FOR OF (es6)
// for (car of cars) {
//     console.log(car);
// }

// FOR IN
const user = {
    firstName: "Benny",
    lastName: "Chicas",
    age: 10,
};

for (let x in user) {
    console.log(`${x}: ${user[x]} `);
}
