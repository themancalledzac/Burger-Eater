DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  meat_based BOOLEAN,
  price DECIMAL(10, 2) NOT NULL,
  current_menu BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);