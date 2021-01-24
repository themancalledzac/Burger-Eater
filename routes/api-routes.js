// what is the purpose of breaking these two routes up?
// split up based off resource based
// i.e., burger crud api route, topping crud api route
// also, can, on one page, both the html-routes AND the api-routes both be called?
// should there be separate 'burgercontroller' files as well?
// why or why not?
var burgerController = require("../controllers/burgerController.js");
const db = require("../models/index.js");

// var db = require("../models");

module.exports = function (app) {

    // this is our create new burger api call
    app.post("/api/burgers", (req, res) => {
        console.log(req.body);
        db.Burgers.create(req.body.newBurger).then((burgerNew) => {
            console.log(burgerNew.dataValues);
            // create a NEW array from our previous req.body.toppings array
            const burgerToppingsArray = req.body.toppings.map(toppingIdBanana => ({
                BurgerId: burgerNew.dataValues.id,
                ToppingId: toppingIdBanana
            }));
            db.BurgerToppings.bulkCreate(burgerToppingsArray).then((data) => {
                console.log(data);
            })
        });
        // db.Burg
        res.send(true);
    });

    app.get("/api/toppings", function (req, res) {
        db.Toppings.findAll({}).then(function (dbToppings) {
            res.json(dbToppings);
        });
    });


    app.get("/api/editBurgers", (req, res) => {

    })
    // app.get("/api/toppings", burgerController.apiToppings);
    // this is our edit single burger api call
    // app.put("/api/burgers/:id", burgerController.)
};