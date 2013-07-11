var fs = require("fs");

var mybuffer = new Buffer(64);

mybuffer = fs.readFileSync("index.html");

var data = mybuffer.toString("utf8", 0, 27);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
		response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
