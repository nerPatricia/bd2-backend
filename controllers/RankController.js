const mongoose = require("mongoose");

const Card = mongoose.model("Card");

module.exports = {
    
    async rank(req,res){
        
        let response = {}
        response.usd = await Card.find({}, 'name usd_variation').sort({ usd_variation: -1 }).limit(10);
        response.eur = await Card.find({}, 'name eur_variation').sort({ eur_variation: -1 }).limit(10);
        console.log("eur", response);
        res.status(200).json(response);
    }
}