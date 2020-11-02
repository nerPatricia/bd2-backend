const mongoose = require("mongoose");

const Card = mongoose.model("Card");

module.exports = {

  async store(allCards) {
    allCards.data.forEach(async card =>{
      await Card.create(card);
    })
  },

};