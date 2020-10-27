module.exports = (sequelize, DataTypes) => {
    const Keyword = sequelize.define('Keyword', {
        word: {
            type: DataTypes.STRING
        },
        cardId: {
            type: DataTypes.STRING
        }
    });

    Keyword.associate = (models) => {
        // associations can be defined here
        Keyword.belongsTo(models.Card, {
          foreignKey: 'cardId',
          targetKey: 'id',
        });
      };

    return Keyword;
}