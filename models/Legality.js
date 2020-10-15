module.exports = (sequelize, DataTypes) => {
    const Legality = sequelize.define('Legality', {
        standard:{
            type: DataTypes.STRING,
        },
        future:{
            type: DataTypes.STRING,
        },
        historic:{
            type: DataTypes.STRING,
        },
        pioneer:{
            type: DataTypes.STRING,
        },
        modern:{
            type: DataTypes.STRING,
        },
        legacy:{
            type: DataTypes.STRING,
        },
        pauper:{
            type: DataTypes.STRING,
        },
        vintage:{
            type: DataTypes.STRING,
        },
        penny:{
            type: DataTypes.STRING,
        },
        commander:{
            type: DataTypes.STRING,
        },
        brawl:{
            type: DataTypes.STRING,
        },
        duel:{
            type: DataTypes.STRING,
        },
        oldschool:{
            type: DataTypes.STRING
        }
    });

    return Legality;
}