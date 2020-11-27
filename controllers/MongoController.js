const mongoose = require("mongoose");
const updateDatabase = require("./CardController");

const Card = mongoose.model("Card");

module.exports = {

  async store(allCards) {
    allCards.data.forEach(async card =>{
      // await Card.create(card);
      var query = {"id": card.id},
      updateDb =  {...card},
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
      // updateDb[$push] = {"price":car.prices};
      delete updateDb["prices"];
      // console.log("Price", updateDb.price || "0000");
      // Find the document
      // TODO: adicionar preço em vez de substituir
      // TODO: colocar data em price
      const result = await Card.findOneAndUpdate(query, updateDb, options);
      await Card.update({"_id": result._id }, { $push: { "prices": card.prices}});
      // result.prices.push(card.prices);
      });
      
  },

};