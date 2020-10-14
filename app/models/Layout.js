module.exports = (sequelize, DataTypes) => {
    const Layout = sequelize.define('Layout', {
        tipo: DataTypes.STRING
    });
  
    return Layout;
  }