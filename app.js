var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
    

app.use(express.static(__dirname + "/public"));
//^Used^to^enable^other^directory^files^like ^css^^

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/home", function(req,res){
    res.render("home");
});

app.get("/contact", function(req,res){
    res.render("contact");
});

app.get("/about", function(req,res){
    res.render("about");
});

//****Listener*****
app.listen(process.env.PORT,process.env.IP, function(){
   console.log("Lets Go!!"); 
});