
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('CardCollection', {
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Card',
                key: 'id',
              },
        },
        collectionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Collection',
                key: 'id',
              },
        }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('CardCollection'),
  };
  