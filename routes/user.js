var request = require('request');

exports.login = function(req, res){
  if (req.body.assertion) {
    request.post({
      url: 'https://verifier.login.persona.org/verify',
      json: {
        assertion: req.body.assertion,
        audience: process.env.URL
      }
    }, function(error, response, body) {
      if (body.status === 'okay') {
        req.session.persona = body;
        res.json(body);
      } else {
        res.send('login failed');
      }
    });
  }
};

exports.logout = function(req, res){
  req.session.destroy();
  res.send("logged out");
};

exports.list = function(req, res){
  res.send("respond with a resource");
};
