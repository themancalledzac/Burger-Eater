module.exports = function (sequelize, DataTypes) {
    const Condiments = sequelize.define("Condiments", {
        condimentsName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },

        condimentsPrice: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
            validate: {
                isNumeric: true,
            }
        },
        condimentsStock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    });
    Condiments.belongsToMany(models.Burgers, { through: "burgerCondiments" });

    return Condiments;
};
