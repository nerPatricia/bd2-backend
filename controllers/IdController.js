const mongoose = require("mongoose");

const Card = mongoose.model("Card");
const Card_SQL = require('../models/postgres/Card.js');

module.exports = {
    
    async searchCardByIdMongo(req, res){
        let response = {}
        response.card = await Card.find({_id: req.params.id});
        console.log("card", response);
        res.status(200).json(response);
      },
      
      async searchCardByIdSql(req, res){
        let response = {}
        response.card = await Card_SQL.findById(req.params.id);
        console.log("card", response);
        res.status(200).json(response);
      }


   
}