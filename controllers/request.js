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

      return res.status(200).json(allCards.data);
    } catch (e) {
      console.log(e);
    }
  }
};
