var fs = require('fs');

var mybuffer = new Buffer(64);

mybuffer=fs.ReadFileSync('/home/nakul/bitstarter/index.html');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send(mybuffer.toString(0,27)
response.send('Nakul');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
