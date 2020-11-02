module.exports = (sequelize, DataTypes) => {
    const Price = sequelize.define('Price', {
        usd: {
            type: DataTypes.FLOAT
        },
        usd_foil: {
            type: DataTypes.FLOAT
        },
        eur: {
            type: DataTypes.FLOAT
        },
        eur_foil: {
            type: DataTypes.FLOAT
        },
        cardId: {
            type: DataTypes.FLOAT
        },

    },{
        indexes: [
            {
              unique: false,
              fields: ['cardId']
            }]
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