module.exports = (sequelize, DataTypes) => {
    const Keyword = sequelize.define('Keyword', {
        word: {
            type: DataTypes.STRING
        },
        cardId: {
            type: DataTypes.Integer
        }
    });

    return Keyword;
}