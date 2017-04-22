var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dobDay: Number,
    dobMonth: Number,
    dobYear: Number,
    phoneNumber: String,
    zip: String,
    emailAddress: String,
});

module.exports = mongoose.model("User", UserSchema);