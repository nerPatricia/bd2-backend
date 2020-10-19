module.exports = (sequelize, DataTypes) => {
    const CardColor = sequelize.define('CardColor', {
        cardId: {
            type: DataTypes.INTEGER
        },
        colorId: {
            type: DataTypes.INTEGER
        }
    });
    CardColor.associate = (models) => {
        // associations can be defined here
        CardColor.belongsTo(models.Card, {
          foreignKey: 'cardId',
          targetKey: 'id',
        });
        CardColor.belongsTo(models.Color, {
            foreignKey: 'colorId',
            targetKey: 'id',
          });
      };

    return CardColor;
}   