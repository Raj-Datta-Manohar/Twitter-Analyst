var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + './../public/views');

express.static(express.static(__dirname + '/../public'));

require('./database.js');
require('./routes.js');

module.exports = app;
