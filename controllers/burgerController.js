var express = require("express");

var router = express.Router();

// import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log(burger);
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.get("/about", function (req, res) {
    console.log(burger);
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("about", hbsObject);
    });
});
router.get("/create", function (req, res) {
    console.log(burger);
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("create", hbsObject);
    });
});
router.get("/edit", function (req, res) {
    console.log(burger);
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("edit", hbsObject);
    });
});
router.get("/menu", function (req, res) {
    console.log(burger);
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("menu", hbsObject);
    });
});


router.post("/api/burgers", function (req, res) {
    burger.create(
        [
            "burger_name", "burger_description"
        ], // not ssure if req.body.name or not?
        [req.body.burger_name, req.body.burger_description], function (result) {
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:burger_id", function (req, res) {
    var condition = "id= " + req.params.burger_id;
    console.log("condition", condition);

    burger.update(
        {

        }
    )
})

module.exports = router;