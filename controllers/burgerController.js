var express = require("express");

var router = express.Router();

// import the model (Burger.js) to use its database functions.
const Burger = require("../models/Burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log(Burger);
    Burger.select_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.get("/about", function (req, res) {
    console.log(Burger);
    Burger.select_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("about", hbsObject);
    });
});
router.get("/create", function (req, res) {
    console.log(Burger);
    Burger.burger_all(function (data) {
        // need a Burger.toppings_all function here?
        // need a Burger.condiment_all function here as well
        // need a Burger.protein_all function here as well
        var burgers = {
            burgers: data
        };
        var toppings = {
            toppings: data
        }
        console.log(burgers);
        res.render("create", burgers, toppings);
    });
});
router.get("/edit", function (req, res) {
    console.log(Burger);
    Burger.burger_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("edit", hbsObject);
    });
});
router.get("/menu", function (req, res) {
    console.log(Burger);
    Burger.burger_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("menu", hbsObject);
    });
});


router.post("/api/burgers", function (req, res) {
    Burger.burger_create(
        [
            "burger_name", "burger_description"
        ], // not ssure if req.body.name or not?
        [req.body.burger_name, req.body.burger_description], function (result) {
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:burger_id", (req, res) => {

    const id = req.params.burger_id;
    console.log(id);

    Burger.burger_update([req.body.current_menu], id, result => {
        if (result.changeRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;




// const condition = `id = ${req.params.burger_id}`

// console.log('condition', condition);

// Burger.burger_update(
//     {
//         burger_update: req.body.burger_update
//     },
//     condition,
//     data => {
//         if (data.changeRows === 0) return res.status(404).end();
//         res.status(200).end();
//     }
// );