module.exports = (sequelize, DataTypes) => {
    const Price = sequelize.define('Price', {
        usd: {
            type: DataTypes.STRING,
        },
        usd_foil: {
            type: DataTypes.STRING,
        },
        eur: {
            type: DataTypes.STRING
        }
    });
    //   TODO colocar foreign key carta
    return Price;
}