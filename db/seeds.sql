USE burger_db;
-- initial burger insert
INSERT INTO
  burgers (
    burger_name,
    burger_rating,
    burger_description,
    price
  )
VALUES
  (
    "California Ave",
    0,
    "Inspired by all the Californians moving to Seattle, this burger comes equipped with some avocado so you can still feel at home.",
    "17.99"
  );
INSERT INTO
  burgers (
    burger_name,
    burger_rating,
    burger_description,
    price
  )
VALUES
  (
    "Teriyaki Tower",
    0,
    "A sweet tower.",
    "22.99"
  );
INSERT INTO
  burgers (
    burger_name,
    burger_rating,
    burger_description,
    price
  )
VALUES
  (
    "The Classic",
    0,
    "When you're boring, or in a rush.",
    "12.99"
  );
INSERT INTO
  burgers (
    burger_name,
    burger_rating,
    burger_description,
    price
  )
VALUES
  (
    "The Classic, veggie",
    0,
    "When you're vegitarian, but also boring (or in a rush).",
    "13.99"
  );
-- toppings inert
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("bun", "0.50", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("onion", "0.20", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("pickle", "0.10", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("lettuce", "0.20", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("coleslaw", "0.20", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("kimchi", "0.20", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("arugula", "0.20", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("tomato", "0.30", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("avocado", "1.0", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("bacon", "1.20", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("mushrooms", "0.30", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("egg", "0.80", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("American Cheese", "0.30", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Swiss Cheese", "0.50", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Pepper-Jack Cheese", "0.40", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Sharp Cheddar Cheese", "0.70", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Gouda Cheese", "0.80", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Cream Cheese", "0.30", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Mozzarella Cheese", "0.40", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Goat Cheese", "0.80", "100");
INSERT INTO
  toppings (topping_name, topping_price, topping_stock)
VALUES
  ("Blue Cheese", "0.90", "100");
-- condiment entries
INSERT INTO
  condiments (condiment_name, condiment_price, condiment_stock)
VALUES
  ("mayo", "0.1", "5000");
INSERT INTO
  condiments (condiment_name, condiment_price, condiment_stock)
VALUES
  ("ketchup", "0.1", "5000");
INSERT INTO
  condiments (condiment_name, condiment_price, condiment_stock)
VALUES
  ("mustard", "0.1", "5000");
INSERT INTO
  condiments (condiment_name, condiment_price, condiment_stock)
VALUES
  ("relish", "0.2", "3000");
INSERT INTO
  condiments (condiment_name, condiment_price, condiment_stock)
VALUES
  ("special sauce", "0.2", "5000");
INSERT INTO
  condiments (condiment_name, condiment_price, condiment_stock)
VALUES
  ("Teriyaki", "0.2", "5000");
-- protein entries
INSERT INTO
  proteins (protein_name, protein_price, protein_stock)
VALUES
  ("Ground Beef", "3.0", "50");
INSERT INTO
  proteins (protein_name, protein_price, protein_stock)
VALUES
  ("Ground Pork", "3.5", "50");
INSERT INTO
  proteins (protein_name, protein_price, protein_stock)
VALUES
  ("Ground Lamb", "4.5", "50");
INSERT INTO
  proteins (protein_name, protein_price, protein_stock)
VALUES
  ("Impossible", "6.5", "50");
INSERT INTO
  proteins (protein_name, protein_price, protein_stock)
VALUES
  ("Chicken Breast", "4.0", "50");
INSERT INTO
  proteins (protein_name, protein_price, protein_stock)
VALUES
  ("Steak", "10.0", "20");