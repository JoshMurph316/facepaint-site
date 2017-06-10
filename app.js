var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require('mongoose'),
    User       = require("./models/user");

// sets port    
var port = process.env.Port|| 8080;
mongoose.connect('mongodb://Joshmurph316:Space100@ds119772.mlab.com:19772/facepaint');
app.use(express.static(__dirname + "/public"));
//^Used^to^enable^other^directory^files^like ^css^^

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//#############use body parser and ejs###################
app.get("/", function(req,res){
   res.render("landing");
});
app.get("/exit", function(req,res){
    res.render("exit");
});
app.post("/exit", function(req,res){
    var firstName    = req.body.firstName,
        emailAddress = req.body.emailAddress;
    var newUser      = ({
        firstName: firstName, 
        emailAddress: emailAddress,
    });
    User.create(newUser, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/exit");
        }
    });
});

//****Listener*****
app.listen(process.env.PORT,process.env.IP, function(){
   console.log("Lets Go!!"); 
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB online");
});