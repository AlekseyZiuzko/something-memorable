const person = {
    // {}  = defines literal
    firstName: "Steve",
    lastName: "Smith",
    age: 29,
    email: "erc7@njit.edu",
    hobbies: ["Music", "Sports"],
    address: {
        city: "Miami",
        state: "FL",
    },
    getBirthYear: function () {
        return 2020 - this.age;
    },
};

let val;

val = person;

// Get specific value
val = person.firstName;
val = person["firstName"];

val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

// Arrays of Objects
const people = [
    { name: "John", age: 30 },
    { name: "Mike", age: 29 },
    { name: "America", age: 10 },
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
