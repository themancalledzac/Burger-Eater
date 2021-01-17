var express = require("express");

var router = express.Router();

// import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render("index");

});
router.get("/about", function (req, res) {
    console.log(burger);
    burger.select_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("about", hbsObject);
    });
});
router.get("/create", function (req, res) {
    console.log(burger);
    burger.select_all(function (data) {
        // need a burger.toppings_all function here?
        // need a burger.condiment_all function here as well
        // need a burger.protein_all function here as well
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("create", burgers);
    });
});
router.get("/edit", function (req, res) {
    console.log(burger);
    burger.select_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("edit", hbsObject);
    });
});
router.get("/edit-single", function (req, res) {
    console.log(burger);
    burger.select_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("edit", hbsObject);
    });
});
router.get("/menu", function (req, res) {
    console.log(burger);
    burger.select_all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("menu", hbsObject);
    });
});


router.post("/api/burgers", function (req, res) {
    burger.burger_create(
        ["burger_name", "burger_description", "price"],
        // not ssure if req.body.name or not?
        [req.body.burger_name, req.body.burger_description, req.body.price], function (result) {
            res.json({ burger_id: result.insertId });
        }
    );
});

router.put("/api/burgers/:burger_id", (req, res) => {

    var condition = "burger_id = " + req.params.burger_id;
    console.log("condition", condition);


    burger.burger_update({
        current_menu: req.body.current_menu
    }, condition, function (result) {
        if (result.changeRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

module.exports = router;


