// const models = require("../models");

module.exports = function (sequelize, DataTypes) {
    const Toppings = sequelize.define("Toppings", {
        toppingName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },

        toppingPrice: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
            validate: {
                isNumeric: true,
            }
        },
        toppingStock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    });

    Toppings.associate = models => {

        Toppings.hasMany(models.BurgerToppings, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    // Toppings.belongsToMany(Burgers, { through: "burgerToppings", as: "Burgers", foreignKey: "id" });
    return Toppings;
};