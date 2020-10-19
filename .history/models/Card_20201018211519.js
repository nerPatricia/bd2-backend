module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: {
      type: DataTypes.STRING, // nome
    },
    lang: {
      type: DataTypes.STRING, // linguagem
    },
    releaseDate: {
      type: DataTypes.DATE, // data de lançamento
    },
    uri: {
      type: DataTypes.STRING, // link do objeto da carta na api do scryfall
    },
    layout: {
      type: DataTypes.STRING, // tipo da carta, ex: normal, saga, aventura, token TODO: criar uma tabela pra isso
    },
    imageUrisNormal: {
      type: DataTypes.STRING, // imagem da carta - do tipo "normal"
    },
    manaCost: {
      type: DataTypes.STRING, // custo de mana
    },
    cmc: {
      type: DataTypes.FLOAT, // custo de mana convertido 
    },
    typeLine: {
      type: DataTypes.STRING, // texto do tipo da carta, ex: Creatura - Orc Warrior
    },
    oracleText: {
      type: DataTypes.STRING, // descrição da carta
    },
    power: {
      type: DataTypes.STRING, // poder
    },
    toughness: {
      type: DataTypes.STRING, // resistencia
    },
    reserved: {
      type: DataTypes.BOOLEAN, // reservada
    },
    foil: {
      type: DataTypes.BOOLEAN, // se tem foil
    },
    nonFoil: {
      type: DataTypes.BOOLEAN, // se tem não-foil
    },
    oversized: {
      type: DataTypes.BOOLEAN, // se tem oversized
    },
    promo: {
      type: DataTypes.BOOLEAN, // se é promo
    },
    collectorNumber: {
      type: DataTypes.STRING, // numero da carta
    },
    rarity: {
      type: DataTypes.STRING, // raridade da carta
    },
    booster: {
      type: DataTypes.BOOLEAN, // se vem em booster
    },
    standard: {
      type: DataTypes.BOOLEAN,
    },
    future: {
      type: DataTypes.BOOLEAN,
    },
    historic: {
      type: DataTypes.BOOLEAN,
    },
    pioneer: {
      type: DataTypes.BOOLEAN,
    },
    modern: {
      type: DataTypes.BOOLEAN,
    },
    legacy: {
      type: DataTypes.BOOLEAN,
    },
    pauper: {
      type: DataTypes.BOOLEAN,
    },
    vintage: {
      type: DataTypes.BOOLEAN,
    },
    penny: {
      type: DataTypes.BOOLEAN,
    },
    commander: {
      type: DataTypes.BOOLEAN,
    },
    brawl: {
      type: DataTypes.BOOLEAN,
    },
    duel: {
      type: DataTypes.BOOLEAN,
    },
    oldschool: {
      type: DataTypes.BOOLEAN,
    }
  });

  // Card.associate = (models) => {
  //   Card.belongsTo(models.Price, {
  //     foreignKey: 'prices',
  //     targetKey: 'id',
  //   });
  //   Card.belongsTo(models.Artist, {
  //     foreignKey: 'artist',
  //     targetKey: 'id',
  //   });
  //   Card.belongsTo(models.Collection, {
  //     foreignKey: 'collection',
  //     targetKey: 'id',
  //   });
  // };

  return Card;
}