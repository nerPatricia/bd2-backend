module.exports = (sequelize, DataTypes) => {
    const Price = sequelize.define('Price', {
        usd: {
            type: DataTypes.STRING
        },
        usd_foil: {
            type: DataTypes.STRING
        },
        eur: {
            type: DataTypes.STRING
        },
        cardId: {
            type: DataTypes.INTEGER
        }
    });

    Price.associate = (models) => {
        // associations can be defined here
        Price.belongsTo(models.Card, {
          foreignKey: 'cardId',
          targetKey: 'id',
        });
      };
    return Price;
}