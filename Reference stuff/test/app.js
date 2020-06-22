async function bar() {
    return Promise.resolve(10);
}

async function foo() {}

const res1 = foo();
const res2 = bar();
console.log(res1, res2);
