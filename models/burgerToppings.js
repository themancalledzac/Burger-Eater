// const models = require(".");

module.exports = function (sequelize, DataTypes) {
    const BurgerToppings = sequelize.define("BurgerToppings", {

    });

    BurgerToppings.associate = models => {

        BurgerToppings.belongsTo(models.Burgers, {
            foreignKey: {
                allowNull: false
            }
        });
        BurgerToppings.belongsTo(models.Toppings, {
            foreignKey: {
                allowNull: false
            }
        })
        // add belongs to for protein AND condiments IN HERE
    };


    // models.Burgers.belongsToMany(models.Toppings, { through: "burgerToppings" });
    // models.Toppings.belongsToMany(models.Burgers, { through: "burgerToppings" });

    return BurgerToppings;
};

