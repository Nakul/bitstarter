var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var mybuffer = new Buffer(64);

mybuffer=fs.ReadFileSync('~/bitstarter/index.html');

app.get('/', function(request, response) {
  response.send(mybuffer.toString(0,12));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
