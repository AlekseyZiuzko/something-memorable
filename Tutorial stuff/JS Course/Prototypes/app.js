// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // };
}

// Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//Gett full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

// Gets married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
};

const john = new Person("John", "Doe", "1-19-1991");
const mary = new Person("Mary", "Poppins", "03-01-1990");

console.log(john.getFullName());
console.log(mary.calculateAge());
console.log(mary.getFullName());
mary.getsMarried("Smith");
console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName"));
