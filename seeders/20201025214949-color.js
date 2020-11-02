'use strict';
const models = require('../models/postgres');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await models.Color.create({
      colorName:"Black"
    });
    await models.Color.create({
      colorName:"White"
    });
    await models.Color.create({
      colorName:"Green"
    });
    await models.Color.create({
      colorName:"Blue"
    });
    await models.Color.create({
      colorName:"Red"
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
