DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  user_id varchar(20),
  message varchar(3000),
  roomname varchar(100),
  PRIMARY KEY (ID)

);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (ID)
);



