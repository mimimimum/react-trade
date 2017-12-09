var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var users = require('./users');

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/user', function (req, res) {
    res.json(users.findAll());
});

app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});

app.listen(3005, function() {
    console.log('Starting node.js on port 3005');
});
