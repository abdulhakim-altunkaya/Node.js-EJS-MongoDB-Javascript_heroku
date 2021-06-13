const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('assets'))

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/index.html'));
});
app.get("/test", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/test.html'));
});
app.get("/coding-skills", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/coding-languages.html'));
});
app.get("/home", function(req, res){
  res.send("It is very very very really working dude");
});


app.listen(process.env.PORT || 5000);
