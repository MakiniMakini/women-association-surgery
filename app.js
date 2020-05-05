var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/index", function(req, res){
    res.render("index")
});
app.get("/gallery", function(req, res){
    res.render("gallery")
});
app.get("/blog", function(req, res){
    res.render("blog")
});
app.get("/chatroom", function(req, res){
    res.render("chatroom")
});
app.get("/membership", function(req, res){
    res.render("membership")
});
app.get("/contact", function(req, res){
    res.render("contact")
});
app.get("/resources", function(req, res){
    res.render("resources")
});





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server Initiated!")
});
//process.env.PORT, process.env.IP