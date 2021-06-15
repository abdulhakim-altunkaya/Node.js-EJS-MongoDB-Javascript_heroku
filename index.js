const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('assets'));
app.set("view engine", "ejs");
app.use("/assets", express.static("static"));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/index.html'));
});
app.get("/coding-skills", function(req, res){
  res.render("a1_coding");
});
app.get("/python-constructor", function(req, res){
  res.render("a2_python");
});
app.get("/deploying-nodejs", function(req, res){
  res.render("a3_nodejs");
});
app.get("/python-pie", function(req, res){
  res.render("a4_pie");
});
app.get("/broken-image-nodejs", function(req, res){
  res.render("a5_nodejs_image");
});
app.get("/ejs1", function(req, res){
  res.render("ejs1");
});
app.get("/test", function(req, res){
  res.send("test");
});
app.get("/home", function(req, res){
  res.send("It is very very very really working dude");
});



app.listen(process.env.PORT || 5000);
