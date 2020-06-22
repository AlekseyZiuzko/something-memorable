// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello world');

// Prompt
// const input = prompt(); // For input
// alert(input);

// Confirm
// if (confirm("Are you sure?")) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner heigth and width
val = window.innerWidth;
val = window.innerHeight;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = "http://google.com";

// Reload page
// window.location.reload();

// History object
// window.history.go(-1);
// val = window.history.length;

// Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
