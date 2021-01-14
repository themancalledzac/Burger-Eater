// imports the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    select_all: function (cb) {
        orm.select_all("burgers", function (res) {
            cb(res);
        });
    },

    burger_create: function (cols, vals, cb) {
        orm.burger_create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    burger_update: function (vals, id, cb) {
        orm.burger_update("burgers", vals, id, cb)
    },

    toppings_all: function (cb) {
        orm.toppings_all("burgers", function (res) {
            cb(res);
        });

    },
    burger_toppings_all: function (cb) {
        orm.burger_toppings_all("burgers", function (res) {
            cb(res);
        });

    }
};

module.exports = burger;