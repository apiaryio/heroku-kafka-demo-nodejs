var express = require('express');
var app = express();
var ejs = require('ejs');

var PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, function () {
  console.log('Example app listening on port: ', PORT);
});
