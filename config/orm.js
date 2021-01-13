var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};


function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {

    burger_all: function (tableInput, callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                console.log("all connection error yo", err)
                throw err;
            }
            callback(result);
        });
    },
    burger_create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    burger_update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    toppings_all: function (tableInput, callback) {
        var queryString = "SELECT * FROM toppings";
        connection.query(queryString, function (err, result) {
            if (err) {
                console.log("topping error yo", err)
                throw err;
            }
            callback(result);
        });
    },
    burger_toppings_all: function (tableInput, callback) {
        var queryString = "SELECT * FROM burger_toppings";
        connection.query(queryString, function (err, result) {
            if (err) {
                console.log("all connection error yo", err)
                throw err;
            }
            callback(result);
        });
    },

};

module.exports = orm;