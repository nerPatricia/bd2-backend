const mongoose = require("mongoose");

const Card = mongoose.model("Card");
const models = require('../models/postgres');

module.exports = {
    
    async searchCardByIdMongo(req, res){
        let response = {}
        response.card = await Card.find({_id: req.params.id});
        console.log("card mongo", response);
        res.status(200).json(response);
      },
      
      async searchCardByIdSql(req, res){
        let response = {}
        response.card = await Card.find({_id: req.params.id});
        console.log("card sql", response);
        res.status(200).json(response);
      }


   
}