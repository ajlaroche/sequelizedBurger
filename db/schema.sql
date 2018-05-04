DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER(10) PRIMARY KEY AUTO_INCREMENT
, burger_name VARCHAR(50) NOT NULL
, devoured BOOLEAN DEFAULT false
);