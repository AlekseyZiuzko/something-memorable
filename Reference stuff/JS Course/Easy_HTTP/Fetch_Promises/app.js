const http = new EasyHTTP();

// Get Users
// http.get("https://jsonplaceholder.typicode.com/users")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// User Data
const data = {
    name: "Aleksey",
    username: "Bambucha",
    email: "crazzylla@gmail.com",
};

// Create POST
// http.post("https://jsonplaceholder.typicode.com/users", data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Create PUT
// http.put("https://jsonplaceholder.typicode.com/users/2", data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Create DELETE
http.delete("https://jsonplaceholder.typicode.com/users/2")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
