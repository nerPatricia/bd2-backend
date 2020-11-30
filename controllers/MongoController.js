const mongoose = require("mongoose");

const Card = mongoose.model("Card");

module.exports = {

  async store(allCards) {
    allCards.data.forEach(async card =>{
      let usd = 0.0;
      let eur = 0.0;
      var query = {"id": card.id},  
      updateDb =  {...card},
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
      delete updateDb["prices"];
      const result = await Card.findOneAndUpdate(query, updateDb, options);
      result.prices.sort().reverse();
      res_usd = result.prices[0]? result.prices[0].usd : 0;
      res_eur = result.prices[0]? result.prices[0].eur : 0;
      usd = (card.prices.usd - res_usd).toFixed(2);
      eur = (card.prices.eur - res_eur).toFixed(2);
      
      await Card.updateOne({"_id": result._id }, { $push: { "prices": card.prices}, "usd_variation": usd, "eur_variation": eur});
      });
      
  },

};