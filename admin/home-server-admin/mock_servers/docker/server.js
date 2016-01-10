var express = require("express");
var fs = require("fs");
var http = require("http");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var app = express();
var server = http.createServer(app);

var respondWithFixture = function(res, name) {
  res.header("Content-Type", "application/json");
  res.send(fs.readFileSync(__dirname + "/fixtures/" + name + ".json"));
}

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

app.use(allowCrossDomain);
app.use(morgan("combined"));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 5000);

app.get("/containers/json", function(req, res) {
  respondWithFixture(res, "containers");
});

server.listen(app.get("port"), function(){
  console.log("Docker mock server listening on port " + app.get("port"));
});
