module.exports = (sequelize, DataTypes) => {
    const CardCollection = sequelize.define('CardCollection', {
        cardId: {
            type: DataTypes.STRING
        },
        collectionId: {
            type: DataTypes.INTEGER
        }
    });
    CardCollection.associate = (models) => {
        // associations can be defined here
        CardCollection.belongsTo(models.Card, {
            foreignKey: 'cardId',
            targetKey: 'id',
        });
        CardCollection.belongsTo(models.Collection, {
            foreignKey: 'collectionId',
            targetKey: 'id',
        });
    };

    return CardCollection;
}