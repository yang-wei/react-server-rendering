'use strict';

require('node-jsx').install();

var express = require('express');
var React = require('react');
var APP = require('./app');

var app = express();

app.get('/', function(req, res) {
  var markup = React.renderToString(APP());
  res.send(markup);
});

app.listen(9999);

