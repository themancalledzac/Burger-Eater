module.exports = function (sequelize, DataTypes) {
    const Proteins = sequelize.define("Proteins", {
        proteinName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },

        proteinPrice: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
            validate: {
                isNumeric: true,
            }
        },
        proteinStock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    });
    Proteins.belongsToMany(models.Burgers, { through: "burgerProteins" });

    return Proteins;
};
