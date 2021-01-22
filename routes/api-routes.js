// what is the purpose of breaking these two routes up?
// split up based off resource based
// i.e., burger crud api route, topping crud api route
// also, can, on one page, both the html-routes AND the api-routes both be called?
// should there be separate 'burgercontroller' files as well?
// why or why not?
var burgerController = require("../controllers/burgerController.js");

// var db = require("../models");

module.exports = function (app) {

    // this is our create new burger api call
    app.post("/api/burgers", burgerController.createBurger);

    // this is our edit single burger api call
    // app.put("/api/burgers/:id", burgerController.)
};