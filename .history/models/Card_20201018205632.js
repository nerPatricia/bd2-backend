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
    // legalities: {
    //   type: Legality, // modalidade em que a carta é válida
    // },
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
    // artist: {
    //   type: Artist, // artista
    // },
    booster: {
      type: DataTypes.BOOLEAN, // se vem em booster
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