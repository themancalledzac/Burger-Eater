// var db = require("../models");

var burgerController = require("../controllers/burgerController.js");

module.exports = function (app) {

    // initial splash page get, simple res.render("/index")
    app.get("/", burgerController.splashPage);

    // simple res.render("/about"), current info can be non-dynamic
    app.get("/about", burgerController.aboutPage);

    // simple res.render("/create"), but inside this page will an app.post for creation of new info
    app.get("/create", burgerController.createPage);

    // this page still requires an api call, do we keep it in the html routes? why or why not?
    app.get("/edit", burgerController.editPage);

    // this page still requires an api call, do we keep it in the html routes? why or why not?
    app.get("/menu", burgerController.menuPage);
}