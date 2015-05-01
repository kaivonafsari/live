var express = require('express');
var app = express();
var session = require('express-session');

app.set('views', '../client/www')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/../client/www'));

app.get('/', function (req, res) {
  res.render('index.html');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});