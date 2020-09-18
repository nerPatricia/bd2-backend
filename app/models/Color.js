module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define('Color', {
        colorName: DataTypes.STRING
    });
  
    return Color;
  }