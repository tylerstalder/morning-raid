var db = require('../db');

exports.rides = function(req, res) {
  res.end(JSON.stringify(db.schedule));
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
