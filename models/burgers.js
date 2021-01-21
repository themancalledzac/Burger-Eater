// const models = require("../models");
// const burgerToppings = models.burgerToppings;
// const Toppings = models.Toppings;
// const Condiments = require("../models/condiments.js");
// const Proteins = require("../models/proteins.js");

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
        burgerToppings: {
            type: DataTypes.STRING,
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

    Burgers.associate = models => {

        Burgers.belongsTo(models.BurgerToppings, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    // Burgers.belongsToMany(Toppings, { through: "burgerToppings", as: "Toppings", foreignKey: "id" });
    // Burgers.belongsToMany(Condiments, { through: "burgerCondiments" });
    // Burgers.belongsToMany(Proteins, { through: "burgerProteins" });

    return Burgers;
};








    // const Toppings = sequelize.define("Toppings", {
    //     toppingName: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //         validate: {
    //             len: [1, 50]
    //         }
    //     },

    //     toppingPrice: {
    //         type: DataTypes.DECIMAL(10, 2),
    //         defaultValue: 0,
    //         validate: {
    //             isNumeric: true,
    //         }
    //     },
    //     toppingStock: {
    //         type: DataTypes.INTEGER,
    //         defaultValue: 0,
    //     }
    // });

    // const BurgerToppings = sequelize.define("BurgerToppings", {
    //     burger_id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     },
    //     topping_id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     }
    // });