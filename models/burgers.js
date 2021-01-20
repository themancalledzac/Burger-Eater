const models = require("../models");
const Toppings = require("../models/toppings.js");
const Condiments = require("../models/condiments.js");
const Proteins = require("../models/proteins.js");

module.exports = function (sequelize, DataTypes) {
    const Burgers = sequelize.define("Burgers", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        burgerDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 500]
            }
        },
        burgerPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isNumeric: true,
                notNull: true,
            }
        },
        menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });
    // Burgers.belongsToMany(Toppings, { through: "burgerToppings" });
    // Burgers.belongsToMany(Condiments, { through: "burgerCondiments" });
    // Burgers.belongsToMany(Proteins, { through: "burgerProteins" });

    return Burgers;
};