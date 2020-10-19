module.exports = (sequelize, DataTypes) => {
    const CardCollection = sequelize.define('Artist', {
        name: {
            type: DataTypes.STRING
        },
        artistId: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    });

    return Artist;
}