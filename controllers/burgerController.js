var express = require("express");

var router = express.Router();

var burger = ("../models/burger.js");

router.get("/", function (req, res) {
    burger.localeCompare(function (data) {
        var object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});
