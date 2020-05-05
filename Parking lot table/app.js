'use strict'
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// DB connection
mongoose.connect('mongodb://localhost/JSHW', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
let db = mongoose.connection;

//Check connection
db.once('open', function () {
    console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function (err) {
    console.log(err);
});

//Init App
const app = express();

//Bring in models
let Car = require('./models/cars')

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Home Route
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Car parking table',
    });
});

// Add Route
app.get('/cars/add', function (req, res) {
    res.render('add_car', {
        title: 'Add New Car'
    });
});

// Get collection of objects
app.get('/cars/', function (req, res) {
    Car.find({}, function (err, cars) {
        if (err) {
            console.log(err);
        } else {
            res.json(cars);
        };
    });
});

//Add Submit POST
// right now there is an issue where server crashes when you try to save an empty form
app.post('/cars/add', function (req, res) {
    let car = new Car();
    car.plateNumber = req.body.plateNumber;
    car.name = req.body.name;
    car.owner = req.body.owner;
    car.cellNumber = req.body.cellNumber;
    car.entryDate = new Date();
    
    car.save(function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });
});

// Delete request
app.delete('/cars/:id', function(req, res) {
    let query = {_id: req.params.id};

    Car.deleteMany(query, function(err, data) {
        if (err) {
            console.log(err)
        }
        res.send('Success!');
    });
});

//Start Server
app.listen(3000, function() {
    console.log('Server started on port 3000...');
});
