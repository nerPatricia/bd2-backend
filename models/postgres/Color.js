module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define('Color', {
        colorName:{
            type:DataTypes.STRING
        }
    });
  
    return Color;
  }