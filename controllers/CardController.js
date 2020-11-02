const sequelize = require("sequelize");
const upsert = require('./util')
const models = require('../models/postgres');


const updateDatabase = async (allCards) => {
  try {
    allCards.data.forEach(async data => {
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
        artist,
      } = data;
      standard = data.legalities.standard == 'legal'?true:false;
      future = data.legalities.future == 'legal'?true:false;
      historic = data.legalities.historic == 'legal'?true:false;
      pioneer = data.legalities.pioneer == 'legal'?true:false;
      modern = data.legalities.modern == 'legal'?true:false;
      legacy = data.legalities.legacy == 'legal'?true:false;
      pauper = data.legalities.pauper == 'legal'?true:false;
      vintage = data.legalities.vintage == 'legal'?true:false;
      penny = data.legalities.penny == 'legal'?true:false;
      commander = data.legalities.commander == 'legal'?true:false;
      brawl = data.legalities.brawl == 'legal'?true:false;
      duel = data.legalities.duel == 'legal'?true:false;
      oldschool = data.legalities.oldschool == 'legal'?true:false;
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
      set_name = data.set_name
      type = data.set_type
      set_uri = data.set_uri
      const collection = await models.Collection.create({
        abbreviation,
        name: set_name,
        type,
        uri: set_uri,
      })

      //CardCollection
      const cardCollection = await models.CardCollection.create({
        cardId: card.id,
        collectionId: collection.id
      })

      //CardColor --for em colors
      data.colors.forEach(async color => {
        let colorId;
        switch (color) {
          case 'B':
            colorId = 1
            break;
          case 'W':
            colorId = 2
            break;
          case 'G':
            colorId = 3
            break;
          case 'U':
            colorId = 4
            break;
          case 'R':
            colorId = 5
            break;
        };
        const cardColord = await models.CardColor.create({
          colorId,
          cardId: card.id
        })
      })

      //Keyword --for em keywords
      data.keywords.forEach(async keyword => {
        const keywords = await models.Keyword.create({
          word: keyword,
          cardId: card.id
        })
      })
      //Price - prices
      const {
        usd,
        usd_foil,
        eur,
        eur_foil
      } = data.prices;
      const keywords = await models.Keyword.create({
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