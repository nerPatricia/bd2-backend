module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('CardCollection', {
        cardId: {
            type: DataTypes.STRING,
            references: {
                model: 'Card',
                key: 'id',
            },
        },
        collectionId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Collection',
                key: 'id',
            },
        }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('CardCollection'),
};