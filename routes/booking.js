var express  = require("express"),
    router   = express.Router(),
    User     = require("../models/users");
    
    
router.get("/booking", function(req,res){
    res.render("booking");
});
router.post("/booking", function(req,res){
    var firstName    = req.body.firstName,
        lastName     = req.body.lastName,
        dobDay       = req.body.dobDay,
        dobMonth     = req.body.dobMonth,
        dobYear      = req.body.dobYear,
        phoneNumber  = req.body.phoneNumber,
        zip          = req.body.zip,
        emailAddress = req.body.emailAddress,
        newUser      = {
        firstName: firstName, 
        lastName: lastName,
        dobDay: dobDay,
        dobMonth: dobMonth,
        dobYear: dobYear,
        phoneNumber: phoneNumber,
        zip: zip,
        emailAddress: emailAddress,
    };
    User.create(newUser, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/booking");
        }
    });
});

module.exports = router;