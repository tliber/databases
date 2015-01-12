var db = require('../db');




module.exports = {
  messages: {
    get: function (cb) {
      // db.collection.query
        console.log(cb, "CALLBACK");


        var Qstr = "select messages.id, messages.message, messages.roomname, users.username from messages \
                    left outer join users on (messages.user_id = users.id) \
                    order by messages.id desc"

        db.query(Qstr,function(err, results){
          cb(results);
        });

    },
    post: function (params, cb) { // a function which can be used to insert a message into the database
      console.log(params, "PARAMMMMMMMMMMMMMMMMMMMMMMMS")
    // query insert str define
        var Qstr = "insert into messages (message, user_id, roomname) values \
        (?, (select id from users where username = ? limit 1), ?)";

        db.query(Qstr,params,  function(err, results){
          if(err){
            console.log(err);
          }
          cb(results);
        });
    }
  },
  users: {
    get: function (cb) {
      var Qstr = "select * from users";
      db.query(Qstr, function(err, results){
        cb(results);
      });
    },
    post: function (params, cb) {
      var Qstr = "insert into users (username) values (?)";
        db.query(Qstr, params, function(err, results){
          cb(results);
      });
    }
  }
};

