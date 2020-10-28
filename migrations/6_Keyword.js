module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Keywords', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    word: {
      type: Sequelize.STRING
    },
    cardId: {
      type: Sequelize.STRING,
      references: {
        model: 'Cards',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Keywords'),
};