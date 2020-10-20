module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Card', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING, // nome
    },
    lang: {
      type: Sequelize.STRING, // linguagem
    },
    releaseDate: {
      type: Sequelize.DATE, // data de lançamento
    },
    uri: {
      type: Sequelize.STRING, // link do objeto da carta na api do scryfall
    },
    layout: {
      type: Sequelize.STRING, // tipo da carta, ex: normal, saga, aventura, token
    },
    imageUrisNormal: {
      type: Sequelize.STRING, // imagem da carta - do tipo "normal"
    },
    manaCost: {
      type: Sequelize.STRING, // custo de mana
    },
    cmc: {
      type: Sequelize.FLOAT, // custo de mana convertido 
    },
    typeLine: {
      type: Sequelize.STRING, // texto do tipo da carta, ex: Creatura - Orc Warrior
    },
    oracleText: {
      type: Sequelize.STRING, // descrição da carta
    },
    power: {
      type: Sequelize.STRING, // poder
    },
    toughness: {
      type: Sequelize.STRING, // resistencia
    },
    reserved: {
      type: Sequelize.BOOLEAN, // reservada
    },
    foil: {
      type: Sequelize.BOOLEAN, // se tem foil
    },
    nonFoil: {
      type: Sequelize.BOOLEAN, // se tem não-foil
    },
    oversized: {
      type: Sequelize.BOOLEAN, // se tem oversized
    },
    promo: {
      type: Sequelize.BOOLEAN, // se é promo
    },
    collectorNumber: {
      type: Sequelize.STRING, // numero da carta
    },
    rarity: {
      type: Sequelize.STRING, // raridade da carta
    },
    booster: {
      type: Sequelize.BOOLEAN, // se vem em booster
    },
    standard: {
      type: Sequelize.BOOLEAN,
    },
    future: {
      type: Sequelize.BOOLEAN,
    },
    historic: {
      type: Sequelize.BOOLEAN,
    },
    pioneer: {
      type: Sequelize.BOOLEAN,
    },
    modern: {
      type: Sequelize.BOOLEAN,
    },
    legacy: {
      type: Sequelize.BOOLEAN,
    },
    pauper: {
      type: Sequelize.BOOLEAN,
    },
    vintage: {
      type: Sequelize.BOOLEAN,
    },
    penny: {
      type: Sequelize.BOOLEAN,
    },
    commander: {
      type: Sequelize.BOOLEAN,
    },
    brawl: {
      type: Sequelize.BOOLEAN,
    },
    duel: {
      type: Sequelize.BOOLEAN,
    },
    oldschool: {
      type: Sequelize.BOOLEAN,
    },
    artist: {
      type: Sequelize.STRING
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