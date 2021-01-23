var express = require("express");

var router = express.Router();

// import the model (burger.js) to use its database functions.
const burger = require("../models/burgers.js");
const toppings = require("../models/toppings.js");
const db = require("../models/index.js");
const { query } = require("express");

// Create all our routes and set up logic within those routes where required.

// -----------------------------------------INDEX("/")---------------------------------------------------------------
function splashPage(req, res) {
    res.render("index");
};

// -----------------------------------------ABOUT-PAGE("/about")-----------------------------------------------------
function aboutPage(req, res) {
    res.render("about");
};

// -----------------------------------------CREATE-PAGE("/create")---------------------------------------------------
function createPage(req, res) {
    // call toppings
    console.log(db.Toppings);
    db.Toppings.findAll({
        // where: query,
        // include: [{
        //     model: db.Toppings
        // }]
        // where: {
        //     toppingStock: {
        //         [Op.lt]: 1,
        //     }
        // }
    }).then(function (dbToppings) {

        res.render("create", dbToppings);
    });
};

// -----------------------------------------MENU-PAGE("/menu")-------------------------------------------------------
function menuPage(req, res) {
    res.render("menu");
};

// -------------------------------------------EDIT-PAGE("/edit")---------------------------------------------------
// TODO - here lies the example
function editPage(req, res) {
    db.Burgers.findAll({}).then(function (dbBurger) {
        res.render("edit", dbBurger);
        // res.json(dbBurger);
    });
    // burger.selectAllBurger(function (data) {
    //     var hbsObject = {
    //         burgers: data
    //     };
    //     console.log(hbsObject);
    //     res.render("editPage", hbsObject);
    // });
};
// -----------------------------------------CREATE-NEW("/???")-------------------------------------------------------

function createBurger(req, res) {
    db.Burgers.create(

        req.body).then(function (dbBurger) {
            res.json(dbBurger);
        });
};
// router.post("/api/burgers", function (req, res) {
//     burger.burger_create(
//         ["burger_name", "burger_description", "price"],
//         // not ssure if req.body.name or not?
//         [req.body.burger_name, req.body.burger_description, req.body.price], function (result) {
//             res.json({ burger_id: result.insertId });
//         }
//     );
// });

// -----------------------------------------API ROUTES()------------------------------------------------------------

// -----------------------------------------API/TOPPINGS()----------------------------------------------------------

function apiToppings(req, res) {
    db.Toppings.findAll({}).then(function (dbToppings) {
        console.log(dbToppings);
        res.json(dbToppings);
    });
};

// ------------what is this shit?---------------------------
// function createBurger(req, res) {
//     burger.selectAllBurger(function (data) {
//         const burgers = {
//             burgers: data
//         };
//         console.log(burgers);
//         res.render("create", burgers);
//         // res.render("create", burgers);
//     });
// };
//        // router.get("/create", function (req, res) {
//        //     console.log(burger);
//        //     burger.select_all(function (data) {

//        //         var burgers = {
//        //             burgers: data
//        //         };
//        //         console.log(burgers);
//        //         res.render("create", burgers);
//        //     });
//        // });



// router.get("/edit", function (req, res) {
//     console.log(burger);
//     burger.selectAllBurger(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("edit", hbsObject);
//     });
// });

// function editBurger(req, res) {
//     burger.selectOneBurger(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         res.render("editBurger", hbsObject);
//     });
// }

// router.get("/edit-single", function (req, res) {
//     console.log(burger);
//     burger.selectAllBurger(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("edit", hbsObject);
//     });
// });
// router.get("/menu", function (req, res) {
//     console.log(burger);
//     burger.selectAllBurger(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("menu", hbsObject);
//     });
// });



// TODO
// router.put("/api/burgers/:burger_id", (req, res) => {

//     var condition = "burger_id = " + req.params.burger_id;
//     console.log("condition", condition);


//     burger.addToMenu({
//         current_menu: req.body.current_menu
//     }, condition, function (result) {
//         if (result.changeRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });

// });

// new export
module.exports = {
    splashPage,
    aboutPage,
    createPage,
    menuPage,
    editPage,
    createBurger,
    apiToppings,
    // editBurger,
    // addToMenu,
};





