module.exports = (sequelize, DataTypes) => {
    const Price = sequelize.define('Price', {
        usd: DataTypes.STRING,
        usd_foil: DataTypes.STRING,
        eur: DataTypes.STRING
    });
    //   TODO colocar foreign key carta
    return Price;
}