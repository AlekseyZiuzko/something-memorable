const User = function (name) {
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function (msg, to) {
        this.chatroom.send(msg, this, to);
    },
    recieve: function (msg, from) {
        console.log(`${from.name} to ${this.name}: ${msg}`);
    },
};

const Chatroom = function () {
    let users = {}; // list of users

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },

        send: function (msg, from, to) {
            // Single user message
            if (to) {
                to.recieve(msg, from);
            } else {
                // Mass message
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(msg, from);
                    }
                }
            }
        },
    };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const jill = new User("Jill");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(jill);

brad.send("Hello, Jeff", jeff);
jill.send("Hey there!", brad);
jeff.send("Hey, guys!");
