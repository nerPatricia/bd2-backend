const axios = require('axios');

// https://api.scryfall.com/search?q=year%3E%3D1990
// axios.get('/search?q=year%3E%3D1990');
// GET request for remote image in node.js

module.exports = {
  async getAllCards(req, res) {
    try {
      const allCards = await axios({
        method: 'get',
        url: 'https://api.scryfall.com/cards/search?q=year%3E%3D2020'
      });

      let payload = {
        data: allCards.data.data,
        next_page: allCards.data.next_page,
        total_cards: allCards.data.total_cards,
        status_code: res.status(200)
      };
      console.log(payload);
      return payload;
    } catch (e) {
      console.log(e);
    }
  }
};