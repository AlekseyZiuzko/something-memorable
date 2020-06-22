const firstName = "Aleksey";
const lastName = "Ziuzko";
const age = 29;
const str = "Hello there my name is Aleksey";
const tags = "web design, web development";

let val;
val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "William ";
val += "Johnson";

val = "Hello, my name is " + firstName + " and I am " + age;

// Length
val = firstName.length;

// concat()
val = firstName.concat(" ", lastName);

// Upper/Lowercase
val = firstName.toLocaleUpperCase();
val = lastName.toLocaleLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf("s");
val = firstName.lastIndexOf("k");

// charAt()
val = firstName.charAt("2");
// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 5);

// slice()
val = firstName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(", ");

// replace()
val = str.replace("Aleksey", "Brad");

// includes()
val = str.includes("Hello");

console.log(val);
