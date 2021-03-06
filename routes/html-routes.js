// var db = require("../models");

var burgerController = require("../controllers/burgerController.js");
const db = require("../models/index.js");
const Toppings = require("../models/toppings");


module.exports = function (app) {

    // initial splash page get, simple res.render("/index")
    app.get("/", (req, res) => {
        res.render("index");
    });

    // simple res.render("/about"), current info can be non-dynamic
    app.get("/about", (req, res) => {
        res.render("about");
    });

    // simple res.render("/create"), but inside this page will an app.post for creation of new info

    app.get("/create", (req, res) => {
        db.Toppings.findAll()
            .then(toppings => {
                // console.log(toppings);
                const toppingsArray = toppings.map(topping => {
                    return {
                        id: topping.dataValues.id,
                        toppingName: topping.dataValues.toppingName,
                        toppingPrice: topping.dataValues.toppingPrice,
                        toppingStock: topping.dataValues.toppingStock,
                    }

                });
                // console.log(toppingsArray);
                // creating an object allToppings, giving it a KEY: of toppings, with a value of the array of all the toppings(from before)
                const allToppings = {
                    toppings: toppingsArray
                }
                // const context = {
                //     toppingsD: toppings.map(Toppings => {
                //         return {
                //             name: Toppings.toppingName,
                //             price: Toppings.toppingPrice,
                //             stock: Toppings.toppingStock
                //         }
                //     })
                // }
                res.render("create", allToppings);
                // console.log(test);
            })
            .catch(err => console.log(err))
    });

    // app.get("/create", function (req, res) {
    //     db.Toppings.findAll({})
    //         .then(function (dbToppings) {

    //             //
    //             const toppings = dbToppings.map((Toppings) => ({
    //                 id: Toppings.id,
    //                 name: Toppings.toppingName,
    //                 price: Toppings.toppingPrice,
    //                 stock: Toppings.toppingStock,
    //             }));
    //             console.log(toppings);

    //             // single object
    //             var object = toppings.reduce(
    //                 (obj, item) => Object.assign(obj, { [item.name]: item.price }), {});
    //             console.log(object);

    //             const toppingId = dbToppings.map((Toppings) => ({
    //                 id: Toppings.id
    //             }));

    //             let id = toppingId.map(a => a.id);
    //             console.log(id);

    //             res.render("create", toppings);
    //         });
    // });
    // app.get("/create", burgerController.createPage);

    // this page still requires an api call, do we keep it in the html routes? why or why not?
    app.get("/edit",
        // on load
        // call DB, render
        burgerController.editPage);

    // this page still requires an api call, do we keep it in the html routes? why or why not?
    app.get("/menu", burgerController.menuPage);
}

