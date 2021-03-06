document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getExternal);

// Get local text file data
function getText() {
    fetch("test.txt")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("output").innerHTML = data;
        })
        .catch((err) => console.log(err));
}

// Get local JSON file data
function getJSON() {
    fetch("posts.json")
        .then((res) => res.json())
        .then((data) => {
            let output = "";
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch((err) => console.log(err));
}

// Get API Data
function getExternal() {
    fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((data) => {
            let output = "";
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch((err) => console.log(err));
}
