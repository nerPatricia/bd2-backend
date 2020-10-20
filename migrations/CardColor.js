
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('CardColor', {
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Card',
                key: 'id',
              },
        },
        colorId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Color',
                key: 'id',
              },
        }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('CardColor'),
  };
  