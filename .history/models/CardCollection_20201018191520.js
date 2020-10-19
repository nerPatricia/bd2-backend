module.exports = (sequelize, DataTypes) => {
    const CardCollection = sequelize.define('Artist', {
        cardId: {
            type: DataTypes.Integer
        },
        collectionId: {
            type: Dat   aTypes.Integer
        }
    });

    return Artist;
}   