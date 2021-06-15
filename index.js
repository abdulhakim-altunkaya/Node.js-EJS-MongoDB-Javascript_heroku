const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('assets'));
app.set("view engine", "ejs");
app.use("/assets", express.static("static"));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/index.html'));
});
app.get("/test", function(req, res){
  res.send("test");
});
app.get("/coding-skills", function(req, res){
  res.render("ejs1");
});
app.get("/home", function(req, res){
  res.send("It is very very very really working dude");
});
app.get("/ejs1", function(req, res){
  res.render("ejs1");
});


app.listen(process.env.PORT || 5000);
