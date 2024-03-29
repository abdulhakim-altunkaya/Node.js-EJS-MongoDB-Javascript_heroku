const express = require("express");
const path = require("path");
const app = express();
const PersonalModel = require("./models/personalInformation");
const connectDB = require("./connect");

connectDB();
app.use(express.static('assets'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/assets", express.static("static"));



app.get("/", function(req, res){
  res.render("index");
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
app.get("/test1", function(req, res){
  res.send("It is very very very really working dude");
});
app.get("/test", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/test.html'));
});
app.get("/contact", function(req, res){
  res.render("comment");
})

app.post("/contact", function(req, res){
  var details = req.body;
  PersonalModel.create(details).then(function(){
    res.render("comment2", {personal_data: details});
  });

});



app.listen(process.env.PORT || 5000);
