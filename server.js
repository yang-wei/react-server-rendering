'use strict';

require('node-jsx').install();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello React');
});

app.listen(9999);

