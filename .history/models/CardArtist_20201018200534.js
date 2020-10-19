module.exports = (sequelize, DataTypes) => {
    const CardArtist = sequelize.define('CardArtist', {
        cardId: {
            type: DataTypes.INTEGER
        },
        artistId: {
            type: DataTypes.INTEGER
        }
    });
    CardArtist.associate = (models) => {
        // associations can be defined here
        CardArtist.belongsTo(models.Card, {
          foreignKey: 'cardId',
          targetKey: 'id',
        });
        CardArtist.belongsTo(models.Artist, {
            foreignKey: 'artistId',
            targetKey: 'id',
          });
      };

    return CardArtist;
}   