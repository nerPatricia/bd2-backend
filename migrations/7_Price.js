module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Price', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    usd: {
      type: Sequelize.FLOAT
    },
    usd_foil: {
      type: Sequelize.FLOAT
    },
    eur: {
      type: Sequelize.FLOAT
    },
    eur_foil: {
      type: Sequelize.FLOAT
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Price'),
};