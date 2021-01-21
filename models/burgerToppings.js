// const models = require(".");

module.exports = function (sequelize, DataTypes) {
    const BurgerToppings = sequelize.define("BurgerToppings", {

    });

    BurgerToppings.associate = models => {

        BurgerToppings.hasMany(models.Burgers, {
            foreignKey: {
                allowNull: false
            }
        });
        BurgerToppings.hasMany(models.Toppings, {
            foreignKey: {
                allowNull: false
            }
        })
    };


    // models.Burgers.belongsToMany(models.Toppings, { through: "burgerToppings" });
    // models.Toppings.belongsToMany(models.Burgers, { through: "burgerToppings" });

    return BurgerToppings;
};

