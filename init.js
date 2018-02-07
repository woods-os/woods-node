// Global requires

var express = require("express");
//var fs = require('fs');
var bodyParser = require('body-parser');
//var pug = require('pug');


// Global variables

var port = 3000;


// Application configuration

var woods = express();

woods.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

woods.use(bodyParser.json()); // support json encoded bodies
woods.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

woods.set('view engine', 'pug');
woods.set('views', 'sys/views');


// Static directories

woods.use(express.static('sys'));
//woods.use(express.static('sys/libs'));
//woods.use(express.static('sys/styles'));
//woods.use(express.static('sys/scripts'));


// Routes

woods.get("/", function (req, res) {
    res.render("desktop");
});


// Start server

woods.listen(port, function () {
    console.log("woods listening on port %d", port);    
});
