var fs = require("fs");

var stats = fs.statSync("index.html");

var mybuffer = new Buffer(stats.size);

mybuffer = fs.readFileSync("index.html");

var data = mybuffer.toString("utf8", 0, mybuffer.length);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
		response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
