const express = require("express");
const app = express();

app.get("/test", function(req, res){
  res.sendFile('/test.html');
});
app.get("/home", function(req, res){
  res.send("It is really working dude");
});

app.listen(process.env.PORT || 5000);
