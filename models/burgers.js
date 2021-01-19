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
            type: DataTypes.BOOLSEAN,
            defaultValue: false,
        }
    });
    Burgers.belongsToMany(models.Toppings, { through: "burgerToppings" });
    Burgers.belongsToMany(models.Condiments, { through: "burgerCondiments" });
    Burgers.belongsToMany(models.Proteins, { through: "burgerProteins" });
}