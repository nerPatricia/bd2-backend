module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
        usd: DataTypes.STRING,
        usd_foil: DataTypes.STRING,
        eur: DataTypes.STRING
    });
  
    return Artist;
  }