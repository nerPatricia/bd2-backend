module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('CardColor', {
        cardId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Card',
                key: 'id',
            },
        },
        colorId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Color',
                key: 'id',
            },
        }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('CardColor'),
};