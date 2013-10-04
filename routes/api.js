var db = require('../db');

var currentRide;

exports.rides = function(req, res) {
  res.end(JSON.stringify(db.schedule));
};

exports.createRide = function(req, res) {
  console.log(req.session);
  currentRide = req.body;
  console.log(currentRide);
  res.end('success');
};

exports.leaderboard = function(req, res) {
  res.end(JSON.stringify(db.leaderboard));
};

exports.mailgun = function(req, res) {
  console.log(req.body);
};

exports.twilio = function(req, res){
  console.log(req.body);
};
