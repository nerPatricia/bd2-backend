module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Keyword', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    word: {
      type: Sequelize.STRING
    },
    cardId: {
      type: Sequelize.STRING,
      references: {
        model: 'Card',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Keyword'),
};