const Color = require('../models/Color');
const Legality = require('../models/Legality');
const Set = require('../models/Set');
const Artist = require('../models/Artist');
const Price = require('../models/Price');



module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
      name: DataTypes.STRING,
      lang: DataTypes.STRING,
      releaseDate: DataTypes.DATE,
      uri: DataTypes.STRING,
      layout: DataTypes.STRING,
      imageUrisNormal: DataTypes.STRING,
      manaCost: DataTypes.STRING,
      cmc: DataTypes.FLOAT,
      typeLine: DataTypes.STRING,
      oracleText: DataTypes.STRING,
      power: DataTypes.STRING,
      toughness: DataTypes.STRING,
      color: DataTypes.ARRAY(Color),
      keywords: DataTypes.ARRAY(DataTypes.STRING),
      legalities: Legality,
      reserved: DataTypes.BOOLEAN,
      foil:  DataTypes.BOOLEAN,
      nonFoil:  DataTypes.BOOLEAN,
      oversized:  DataTypes.BOOLEAN,
      promo:  DataTypes.BOOLEAN,
      set: Set,
      collectorNumber: DataTypes.STRING,
      rarity: DataTypes.STRING,
      artist: Artist,
      booster: DataTypes.BOOLEAN,
      prices: Price
    });
  
    return Card;
  }