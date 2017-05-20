var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require('mongoose'),
    User       = require("./models/users"),
    bookingRoute = require("./routes/booking");

//enables routes
app.use(bookingRoute);
// sets port    
var port = process.env.Port|| 8080;
mongoose.connect('mongodb://localhost/facepaint');
app.use(express.static(__dirname + "/public"));
//^Used^to^enable^other^directory^files^like ^css^^

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//#############use body parser and ejs###################
app.get("/", function(req,res){
   res.render("landing");
});
app.get("/home", function(req,res){
    res.render("home");
});
app.get("/about", function(req,res){
    res.render("about");
});
app.get("/gallery", function(req,res){
    res.render("gallery");
});
app.get("/exit", function(req,res){
    res.render("exit");
})


//****Listener*****
app.listen(process.env.PORT,process.env.IP, function(){
   console.log("Lets Go!!"); 
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});