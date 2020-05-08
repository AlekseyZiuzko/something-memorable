//let, const

//data types: String, Numbers, Boolean, null, undefined, Symbols
const name = 'Aleksey';
const age = 29;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template String
console.log(`My name is ${name} and I am ${age}`);




//Some String methods
let s = 'something, interesting, here, or, not';
console.log(s.split(', '));
console.log(name.substring(0, 2).toUpperCase());

//Arrays
const fruits = ['apples', 'oranges', 10, true];

fruits.push('grapes'); //adds to the end
fruits.unshift('mangos'); //ads to the start
fruits.pop(); //removes last element
fruits.shift(); //removes first element
console.log(fruits[1]);
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

//Objects

const person = {
    firstName: 'Aleksey',
    lastName: 'Ziuzko',
    age: 29,
    hobbies: ['biking', 'hiking', 'videogames'],
    adress: {
        street: 'Kirponosa',
        city: 'Chernihiv',
    }
};

console.log(person);
//Destruturing
const { firstName, lastName, adress: {street} } = person;
console.log(street);

person.email = 'az@gmail.com';

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Fix a bike',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn some stuff',
        isCompleted: false
    }
];

//While
let i = 0;
while (i < 10) {
    console.log(`For Loop Number: ${i}`)
    i++;
};

// For
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text)
};

for (let todo of todos) {
    console.log(todo.id)
};

//forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text)
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoComplete = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoComplete);

//if
const x = 6;
const y = 11;

if (x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10')
}

//Ternary operator
const x = 11;

const color = x > 10 ? 'red' : 'blue';

console.log (color);

//switch
const x = 9;

const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('not red or blue');
        break;
}

//Functions
function addNums(num1 = 1, num2 = 2) {
    return num1 + num2;
};

console.log(addNums());

const addNums = (num1 = 1, num2 = 2) => {
    return num1 + num2;
};

console.log(addNums());

//Constructor function
function Person(firstName, lastName, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(birthdate);
};

Person.prototype.getBirthYear = function() {
    return this.birthdate.getFullYear();
};

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

//Class
class Person {
    constructor (firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = new Date(birthdate);
    }

    getBirthYear = function() {
        return this.birthdate.getFullYear();
    }

    getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Instantiate object
const person1 = new Person('Aleksey', 'Ziuzko', '01-19-91');
console.log(person1.getFullName());

//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
//Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
//loop through DOM elements
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello there';
ul.children[1].innerText = 'Draug';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents the form submitting
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});