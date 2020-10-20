
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Card', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      word: {
        type: DataTypes.STRING
    },
    cardId: {
        type: DataTypes.INTEGER,
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Card'),
  };
  