// ES6 CLASSES

// class Person {
//     constructor(firstName, lastname, dob) {
//         this.firstName = firstName;
//         this.lastname = lastname;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastname}!`;
//     }

//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.lastname = newLastName;
//     }

//     static addNumbers(x, y) {
//         return x + y;
//     }
// }

// const mary = new Person("Mary", "Smith", "11-13-1980");
// mary.getsMarried("Matews");
// console.log(mary.calculateAge());
// console.log(mary);
// console.log(Person.addNumbers(1, 2));

// SUB CLASSES

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetings() {
        return `Hello there ${this.firstName} ${this.lastName}!`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer("John", "Doe", "555-555", "Standard");
console.log(john);
console.log(john.greetings());
console.log(Customer.getMembershipCost());
