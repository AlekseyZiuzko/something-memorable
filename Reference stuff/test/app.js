const arr = [
    [["Julius"], ["Ceasar"]],
    [["Albert"], ["Einstein"]],
];

const arr2 = ([name1, sirname1, name2, sirname2] = arr);

function getCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}

let counter1 = getCounter();
let counter2 = getCounter();

if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

const animal = {
    jumps: true,
};

const rabbit = Object.create(animal);
