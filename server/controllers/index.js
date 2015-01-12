//FETCHING AND CREATION OF MESSAGES AND USERS
var models = require('../models');
var bluebird = require('bluebird');

var userInps = ['username'];
var messageInps = ['message','username','room'];
//define msaageFileds

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(function(err, result){
        if(err){
          console.log(err, "IN CONTROLLERS LINE 14");
        }
        res.json(results);
      });

    },

    post: function (req, res){
      // console.log(req.body, "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
      // console.log(req.body, 'THIS IS THE BODY');
      console.log(req.body["room"]);
      console.log(req.body["username"])
      console.log(req.body["message"])

      var params = [ req.body["message"], req.body["username"], req.body["room"] ];
      // console.log(params, "REQ BODY PARAMSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
      models.messages.post(params, function(err, result){
          if(err){
            console.log(err, "IN CONTROLLERS LINE 37");
          }
          res.json(result);
      });
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results){
        if (err){
          console.log(err, "IN CONTROLLERS LINE 55")
        }
        res.json(results);
      })
    },
    post: function (req, res) {
      var params = [req.body[username]];
      model.users.post(function(err, results){
      if (err){
        console.log(err, "IN CONTROLLERS LINE 67");
      };
      res.json(results);
      });
    //sim to message post
    }
  }
}
};

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};
