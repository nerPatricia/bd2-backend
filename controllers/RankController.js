const mongoose = require("mongoose");

const Card = mongoose.model("Card");

module.exports = {
    
    async rankUp(req,res){
        
        let response = {}
        response.usd = await Card.find({}).select('name usd_variation prices').sort({ usd_variation: -1 }).limit(10);
        response.eur = await Card.find({}).select('name eur_variation prices').sort({ eur_variation: -1 }).limit(10);
        response.usd.forEach(card =>{
            card.price = card.prices.sort().reverse()[0].usd;
        });
        response.eur.forEach(card =>{
            card.prices = card.prices.sort().reverse()[0].eur;
        });
        res.status(200).json(response);
    },


    async rankDown(req,res){
        
        let response = {}
        response.usd = await Card.find({}).select('name usd_variation prices').sort({ usd_variation: 1 }).limit(10);
        response.eur = await Card.find({}).select('name eur_variation prices').sort({ eur_variation: 1 }).limit(10);
        response.usd.forEach(card =>{
            card.price = card.prices.sort().reverse()[0].usd;
        });
        response.eur.forEach(card =>{
            card.prices = card.prices.sort().reverse()[0].eur;
        });
        res.status(200).json(response);
    }
}