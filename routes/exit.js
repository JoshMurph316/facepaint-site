const express = require('express');
const router = express.Router();
const User = require('../models/user');
const helper = require('sendgrid').mail;
const mailer = require('../config/mailerconfig');

router.get("/", function(req, res) {
    res.render("exit");
});
router.post("/", function(req, res) {
    console.log(req.body.name);
    console.log(req.body.email);
    var firstName = req.body.name,
        emailAddress = req.body.email;
    var newUser = ({
        firstName: firstName,
        emailAddress: emailAddress,
    });
    User.create(newUser, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/exit");
        }
    });
    const fromEmail = new helper.Email(mailer.fromEmail);
    const toEmail = new helper.Email(mailer.toEmail);
    const subject = 'Hey Ethel have a new customer';
    const content = new helper.Content('text/plain', 'Here is the Name: ' + newUser.firstName + ' and here is Email: ' + newUser.emailAddress);
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);

    const sg = require('sendgrid')(mailer.key);
    const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    sg.API(request, function(error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });
});

module.exports = router;