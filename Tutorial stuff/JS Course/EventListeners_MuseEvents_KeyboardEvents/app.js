// EVENT LISTENERS

// document.querySelector(".clear-tasks").addEventListener("click", (e) => {
//     console.log("Hello");

//     e.preventDefault();
// });

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
//     // console.log("Clicked");

//     let val;

//     val = e;

//     // Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     //Event type
//     val = e.type;

//     // Timestamp
//     val = e.timeStamp;

//     // Coordinates of the event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     // Coordinates of the event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }

// MOUSE EVENTS
// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener("click", runEvent);

// Double click
// clearBtn.addEventListener("dblclick", runEvent);

// Mousedown
// clearBtn.addEventListener("mousedown", runEvent);

// Mouseup
// clearBtn.addEventListener("mouseup", runEvent);

// Mouseenter
// card.addEventListener("mouseenter", runEvent);

// Mouseleave
// card.addEventListener("mouseleave", runEvent);

// Mouseover
// card.addEventListener("mouseover", runEvent);

// Mouseout
// card.addEventListener("mouseout", runEvent);

//Mousemove
// card.addEventListener("mousemove", runEvent);

//Event handler
// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// KEYBOARD AND INPUT EVENTS
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// Clear input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// Keydown
// taskInput.addEventListener("keydown", runEvent);

// Keyup
// taskInput.addEventListener("keyup", runEvent);

// Keypress
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Paste
// taskInput.addEventListener("paste", runEvent);

// Input
// taskInput.addEventListener("input", runEvent);

// Change
// select.addEventListener("change", runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // console.log(e.target.value);

    // heading.innerText = e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}
