module.exports = (sequelize, DataTypes) => {
    const Price = sequelize.define('Price', {
        usd: DataTypes.STRING,
        usd_foil: DataTypes.STRING,
        eur: DataTypes.STRING,
        cardId: {
            type: Sequelize.INTEGER,
            references: {
               model: 'cards', 
               key: 'id', 
            }
         }
    });
    return Price;
}