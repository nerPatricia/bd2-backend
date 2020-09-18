module.exports = (sequelize, DataTypes) => {
    const Set = sequelize.define('Set', {
        abbreviation: DataTypes.STRING,
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        uri: DataTypes.STRING
    });
  
    return Set;
  }