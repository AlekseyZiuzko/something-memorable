let val;

// Number to String
val = String(555);
val = String(5 + 5);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// Strings to Numbers
val = Number("5");
val = Number("Hello");

// Boolean to Number
val = Number(true);
val = Number(false);
val = Number(null);

// Array to Number
val = Number([1, 2, 3]);

// parseInt() parseFloat()
val = parseInt("100.30");
val = parseFloat("100.30");

//Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

const val1 = 5;
const val2 = String(6);
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);
