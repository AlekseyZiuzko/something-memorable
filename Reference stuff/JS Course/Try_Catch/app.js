const user = { email: "az@gmail.com" };

try {
    // Produce a ReferenceError
    // myFunction();

    //Produce a TypeError
    // null.myFunction();

    // Produce SyntaxError
    // eval("Hello World");

    // Produce URIError
    // decodeURIComponent("%");

    if (!user.name) {
        // throw "User has no name";
        throw new SyntaxError("user has no name");
    }
} catch (err) {
    console.log(`User Error: ${err.message}`);
    // console.log(`${err.name} is here`);
    // console.log(err);
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err instanceof ReferenceError);
    // console.log(err instanceof TypeError);
} finally {
    console.log("Finally runs regardless of result...");
}

console.log("Program continues...");
