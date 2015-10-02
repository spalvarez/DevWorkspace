var http = require("http");
var express = require("express");
var app = express();
//var ejsEngine = require("ejs-locals");
var controllers = require("./controllers");

//Setup the view engine
//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); //support master pages
//app.set("view engine", "ejs"); // ejs view engine
app.set("view engine", "vash");

//map the routes
controllers.init(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Sean", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);