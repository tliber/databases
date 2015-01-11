DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  user varchar(20),
  messages varchar(3000),
  room varchar(100),
  created_at date

  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

