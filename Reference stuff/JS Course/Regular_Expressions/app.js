// BASIC FUNCTIONS

// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec("hello world");

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test("Hello");

// console.log(result);

// match() - return result array or null
// const str = "Hello there";
// const result = str.match(re);

// console.log(result);

// search() - return index of the first match and if not found it returns -1
// const str = "Hello there";
// const result = str.search(re);

// console.log(result);

// replace() - return new string with some or all matches of a patern
// const str = "Hello there";
// const newStr = str.replace(re, "hi");

// console.log(newStr);

// CHARACTERS
let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; //Must start with
re = /ld$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional characters
re = /gre?a?y\?/i; // Escape characters

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[FG]ray/i;
re = /[^FG]ray/i; // Match anything but F or G
re = /[A-Z]ray/i; // Match any uppercase letter
re = /[a-z]ray/i; // Match any lowercase letter
re = /[A-Za-z]ray/i; // Match any letter
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /hel{2}o/i; // Must occur exactly {m} amount of times
re = /hel{2,4}o/i; // Must occur between {m} times
re = /hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word Characters
re = /\d/; // Any Digit one time
re = /\d+/; // Any Digit 0 or more times
re = /\D/; // Any Non-Digit
re = /\s/; // Match whitspace character
re = /\S/; // Non-whitespace character
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = "asdasxasdsas";

// Log results
const result = re.exec(str);
console.log(result);

// Log Results
function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);
