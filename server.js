var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "/client")));
app.use(express.static(path.join(__dirname, "/dist")));

app.get("*", function (req, res) {
  res.sendFile("./client/index.html", { root: __dirname });
});

app.listen("4000", function () {
  console.log("Express server is up!");
});
