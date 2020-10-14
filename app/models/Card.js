// const Color = require('../models/Color');
const Legality = require('../models/Legality');
const Set = require('../models/Set');
const Artist = require('../models/Artist');
const Price = require('../models/Price');
const Layout = require('../models/Layout');

module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING, // nome
    lang: DataTypes.STRING, // linguagem
    releaseDate: DataTypes.DATE, // data de lançamento
    uri: DataTypes.STRING, // link do objeto da carta na api do scryfall
    layout: Layout, // tipo da carta, ex: normal, saga, aventura, token 
    imageUrisNormal: DataTypes.STRING, // imagem da carta - do tipo "normal"
    manaCost: DataTypes.STRING, // custo de mana
    cmc: DataTypes.FLOAT, // custo de mana convertido 
    typeLine: DataTypes.STRING, // texto do tipo da carta, ex: Creatura - Orc Warrior
    oracleText: DataTypes.STRING, // descrição da carta
    power: DataTypes.STRING, // poder
    toughness: DataTypes.STRING, // resistencia
    color: DataTypes.ENUM('green', 'blue', 'black', 'white', 'red', 'colorless', 'multicolor', 'land'), // array de cores da carta 
    keywords: DataTypes.ARRAY(DataTypes.STRING), // efeitos chaves
    legalities: Legality, // modalidade em que a carta é válida
    reserved: DataTypes.BOOLEAN, // reservada
    foil: DataTypes.BOOLEAN, // se tem foil
    nonFoil: DataTypes.BOOLEAN, // se tem não-foil
    oversized: DataTypes.BOOLEAN, // se tem oversized
    promo: DataTypes.BOOLEAN, // se é promo
    set: Set, // qual o set de lançamento da carta
    collectorNumber: DataTypes.STRING, // numero da carta
    rarity: DataTypes.STRING, // raridade da carta
    artist: Artist, // artista
    booster: DataTypes.BOOLEAN, // se vem em booster
    prices: Price // preços em dolar, euro e dolar-foil
  });

  Card.hasOne(Price);
  return Card;
}