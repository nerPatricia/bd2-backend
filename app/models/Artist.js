module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
        name: DataTypes.STRING,
        artistId: DataTypes.ARRAY(DataTypes.STRING)
    });
  
    return Artist;
  }