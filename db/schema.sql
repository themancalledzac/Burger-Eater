-- TO DO ---------------------------------------------------------
-- NEED burger table to FOREIGN key toppings, condiments, and meats
-- NEED burger price to be addition of all topping/condiment/meat prices included in that burger
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers (
  burger_id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  burger_rating int,
  burger_description VARCHAR(500),
  price DECIMAL(10, 2) NOT NULL,
  current_menu BOOLEAN DEFAULT false,
  PRIMARY KEY (burger_id)
);
USE burger_db;
CREATE TABLE toppings (
  topping_id INT AUTO_INCREMENT,
  topping_name VARCHAR(30) NOT NULL,
  topping_price DECIMAL(4, 2),
  topping_stock INT,
  PRIMARY KEY (topping_id)
);
USE burger_db;
CREATE TABLE burger_toppings (
  burger_id int NOT NULL,
  topping_id int NOT NULL,
  PRIMARY KEY (burger_id, topping_id),
  FOREIGN KEY (burger_id) REFERENCES burgers(burger_id),
  FOREIGN KEY (topping_id) REFERENCES toppings(topping_id)
);
USE burger_db;
CREATE TABLE condiments (
  condiment_id INT AUTO_INCREMENT,
  condiment_name VARCHAR(20) NOT NULL,
  condiment_price DECIMAL (4, 2),
  condiment_stock INT,
  PRIMARY KEY (condiment_id)
);
USE burger_db;
CREATE TABLE burger_condiments (
  burger_id int NOT NULL,
  condiment_id int NOT NULL,
  PRIMARY KEY (burger_id, condiment_id),
  FOREIGN KEY (burger_id) REFERENCES burgers(burger_id),
  FOREIGN KEY (condiment_id) REFERENCES condiments(condiment_id)
);
USE burger_db;
CREATE TABLE proteins (
  prot_id INT AUTO_INCREMENT,
  protein_name VARCHAR(30) NOT NULL,
  protein_price DECIMAL (5, 2),
  protein_stock INT,
  PRIMARY KEY (prot_id)
);
USE burger_db;
CREATE TABLE burger_proteins (
  burger_id int NOT NULL,
  prot_id int NOT NULL,
  PRIMARY KEY (burger_id, prot_id),
  FOREIGN KEY (burger_id) REFERENCES burgers(burger_id),
  FOREIGN KEY (prot_id) REFERENCES proteins(prot_id)
);