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

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}
var orm = {

    select_all: function (table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
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
    // UPDATE burgers SET current_menu=true WHERE burger_id = 3
    // burger_update: function (table, objColVals, condition, cb) {
    //     console.log(objColVals);
    //     var queryString = "UPDATE " + table;
    //     queryString += " SET ";
    //     queryString += objToSql(objColVals);;
    //     queryString += " WHERE ";
    //     queryString += condition;
    //     console.log(queryString);
    //     connection.query(queryString, function (err, result) {
    //         if (err) { throw err; }
    //         cb(result);
    //     });
    // "INSERT INTO `burgers` SET current_menu=true WHERE `current_menu` = 'true'"
    burger_update: function (table, objColVals, condition, cb) {
        let valFinal = objToSql(objColVals);
        var queryString = "UPDATE " + table + " SET " + valFinal + " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
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