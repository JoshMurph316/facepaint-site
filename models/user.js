var mongoose = require("mongoose");
var Schema = mongoose.Schema

var schema = new Schema({
    firstName: {type: String, required: true},
    emailAddress: {type: String, required: true}
});

module.exports = mongoose.model("User", schema);