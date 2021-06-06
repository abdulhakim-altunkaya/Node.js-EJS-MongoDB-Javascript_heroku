const express = require("express");
const path = require("path");
const app = express();


app.get("/test", function(req, res){
  res.sendFile(path.join(__dirname, '/test.html'));
});
app.get("/home", function(req, res){
  res.send("It is very very very really working dude");
});

app.listen(process.env.PORT || 5000);
