// Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person("John", "Doe");

// // console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer("Tom", "Smith", "111112222", "Standard");

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function () {
//     return `Hello there ${this.firstName} ${this.lastName}! Welcome to our company!`;
// };

// console.log(customer1.greeting());

// OBJECT CREATE
const personPrototypes = {
    greeting: function () {
        return `Hello there, ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Smith";
mary.age = "29";

mary.getsMarried("Thompson");

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: { value: "Brad" },
    lastName: { value: "Thompson" },
    age: { value: 30 },
});

console.log(brad.greeting(0));
