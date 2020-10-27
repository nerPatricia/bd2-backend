const sequelize = require("sequelize");

const models = require('../models/postgres');


const updateDatabase = async (allCards) => {
  try {
  allCards.data.forEach(async data =>{
  //Card
  const {
    id,
    name,
    lang,    
    uri,
    layout,    
    cmc, 
    power,
    toughness,
    reserved,
    foil,
    nonFoil,
    oversized,
    promo,
    rarity,
    booster,
    standard,
    future,
    historic,
    pioneer,
    modern,
    legacy,
    pauper,
    vintage,
    penny,
    commander,
    brawl,
    duel,
    oldschool,
    artist,
  } = data;
  releaseDate = data.released_at
  imageUrisNormal = data.image_uris.normal
  typeLine = data.type_line 
  oracleText = data.oracle_text
  collectorNumber = data.collector_number
  manaCost = data.mana_cost
  const card = await models.Card.create({
    id,
    name,
    lang,
    uri,
    layout,
    cmc,
    power,
    toughness,
    reserved,
    foil,
    nonFoil,
    oversized,
    promo,
    rarity,
    booster,
    standard,
    future,
    historic,
    pioneer,
    modern,
    legacy,
    pauper,
    vintage,
    penny,
    commander,
    brawl,
    duel,
    oldschool,
    artist,
    releaseDate,
    typeLine,
    oracleText,
    collectorNumber,
    manaCost
  });

  //Collection
  imageUrisNormal = data.image_uris.normal
  abbreviation = data.set
  name = data.set_name
  type = data.set_type
  uri = data.set_uri
  const collection = await models.Collection.create({
    abbreviation,
    name,
    type,
    uri,
  })

  //CardCollection
  const cardCollection = await models.CardCollection.create({
  cardId: card.id,
  collectionId: collection.id})
  
  //CardColor --for em colors
  data.colors.forEach(async color=>{
    let colorId;
    switch(color) {
      case 'B':
        colorId=1
        break;
      case 'W':
        colorId=2
        break;
      case 'G':
        colorId=3
        break;
      case 'U':
        colorId=4
        break;
      case 'R':
        colorId=5
        break;      
    };
    const cardColord = await models.CardColor.create({
      colorId,
      cardId: card.id
    })
  })
  
  //Keyword --for em keywords
  data.keywords.forEach(async keyword=>{
    const keywords = await models.Keywords.create({
      word: keyword,
      cardId: card.id
    })
  })
  //Price - prices
  const{
  usd,
  usd_foil,
  eur,
  eur_foil} = data.prices;
  const keywords = await models.Keywords.create({
    usd,
    usd_foil,
    eur,
    eur_foil,
    cardId: card.id
  })
  // ---------------
    console.log("Card criado")
})
  } catch (error) {
    console.log("ERROR: ", error)
  }
};

module.exports = updateDatabase;
