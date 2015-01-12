  //later sequalize
    //make orm object, take in db oarams

  //mkae a user orm object with
    //params == sequilize.strings
  //make messages model
    //text and roomname

  //give users mant messagss propserty with messages
  //give message belongs to property

  //synscronize users
  //sysncronizde messages

  //export both

  //seperate from other stuff below can delete

var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '12345',
      database : 'chat'
    }
);
// console.log(connection);
connection.connect();
module.exports = connection;
// module.export(connection);
//connect to

//export conncet
