var express = require("express");

var router = express.Router();

// import the model (burger.js) to use its database functions.
var burger = ("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
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

router.put("/api/burgers/:burger_id")

module.exports = router;