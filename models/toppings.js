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
    Toppings.belongsToMany(models.Burgers, { through: "burgerToppings" });

    return Toppings;
};