const axios = require('axios');
const CardController = require('./CardController')
// https://api.scryfall.com/search?q=year%3E%3D1990
// axios.get('/search?q=year%3E%3D1990');
// GET request for remote image in node.js

module.exports = {
  async getAllCards(req, res) {
    try {
      let allCards;
      url = 'https://api.scryfall.com/cards/search?q=year%3E%3D2020';
      while (url) {
        allCards = (await axios({
          method: 'get',
          url
        })).data;
        CardController(allCards);
        console.log(allCards.has_more)
        if (!allCards.has_more) {
          url = null;
        } else {
          url = allCards.next_page;
        }
      };
      return res.status(200).json(allCards.data);
    } catch (e) {
      console.log(e);
    }
  }
};