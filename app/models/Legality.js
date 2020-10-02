module.exports = (sequelize, DataTypes) => {
    const Legality = sequelize.define('Legality', {
        standard: DataTypes.STRING,
        future: DataTypes.STRING,
        historic: DataTypes.STRING,
        pioneer: DataTypes.STRING,
        modern: DataTypes.STRING,
        legacy: DataTypes.STRING,
        pauper: DataTypes.STRING,
        vintage: DataTypes.STRING,
        penny: DataTypes.STRING,
        commander: DataTypes.STRING,
        brawl: DataTypes.STRING,
        duel: DataTypes.STRING,
        oldschool: DataTypes.STRING
    });

    return Legality;
}