module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('CardColors', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        cardId: {
            type: Sequelize.STRING,
            references: {
                model: 'Cards',
                key: 'id',
            },
        },
        colorId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Colors',
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('CardColors'),
};