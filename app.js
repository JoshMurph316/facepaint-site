var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require('mongoose'),
    User       = require("./models/users"),
    indexRoute = require("./routes/index");


app.use(indexRoute);
// set port    
var port = process.env.Port|| 8080;
mongoose.connect('mongodb://localhost/facepaint');
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

app.get("/about", function(req,res){
    res.render("about");
});


// User.create({firstName:"Josh", lastName:"Murphy"}, function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

//****Listener*****
app.listen(process.env.PORT,process.env.IP, function(){
   console.log("Lets Go!!"); 
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});