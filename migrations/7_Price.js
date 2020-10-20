module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Price', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    usd: {
      type: Sequelize.STRING
    },
    usd_foil: {
      type: Sequelize.STRING
    },
    eur: {
      type: Sequelize.STRING
    },
    cardId: {
      type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Price'),
};