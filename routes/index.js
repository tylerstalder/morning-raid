var mailgun = require('mailgun');
var twilio = require('twilio')(process.env.TWILIO_KEY, process.env.TWILIO_SECRET);

var db = require('../db');

var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun(process.env.MAILGUN_KEY);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.rides = function(req, res) {
  res.end(JSON.stringify(db.schedule));
};

exports.leaderboard = function(req, res) {
  res.end(JSON.stringify(db.leaderboard));
};

exports.twilio = function(req, res){
  //Send an SMS text message
  twilio.sendSms({
    to: process.env.PHONE_TO_TEST,
    from: process.env.PHONE_FROM_TEST,
    body: 'Morning raid is tomorrow, you in?'
  }, function(err, responseData) {
    if (!err) {
      console.log(err);
      console.log(responseData.from);
      console.log(responseData.body);
    }
  });
  res.render('admin');
};

exports.email = function(req, res) {
  mg.sendText(process.env.EMAIL_FROM_TEST, [process.env.EMAIL_TO_TEST],
              'Morning Raid tomorrow',
              'Spire at 7:15',
              process.env.EMAIL_FROM_TEST, {},
              function(err) {
                if (err) console.log('Oh noes: ' + err);
                else     console.log('Success');
              });
};

