var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    User = require("./models/user"),
    exitRoutes = require('./routes/exit'),
    config = require('./config/database');


var app = express();
// sets port    
var port = process.env.PORT || 8080;
mongoose.connect(config.db);
app.use(express.static(__dirname + "/public"));
//^Used^to^enable^other^directory^files^like ^css^^

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//#############use body parser and ejs###################

app.use('/exit', exitRoutes);

app.get("/", function(req, res) {
    res.render("landing");
});

//****Listener*****
app.listen(port, function() {
    console.log("Lets Go!!");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB online");
});