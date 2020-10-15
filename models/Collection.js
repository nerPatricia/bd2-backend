module.exports = (sequelize, DataTypes) => {
    const Collection = sequelize.define('Collection', {
        abbreviation: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        uri: {
            type: DataTypes.STRING
        }
    });

    return Collection;
}