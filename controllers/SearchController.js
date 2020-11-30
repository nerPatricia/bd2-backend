const mongoose = require("mongoose");

const Card = mongoose.model("Card");
const models = require('../models/postgres');


const { Op } = require("sequelize");

module.exports.MongoSearch = async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 30;
    const name = req.query.name || '';
    const collection = req.query.collection || '';
    const usd_max=req.query.usd_max || null;
    const eur_max=req.query.eur_max || null;
    const usd_min=req.query.usd_min || null;
    const eur_min=req.query.eur_min || null;
    const cmc = req.query.cmc || '';
    const rarity = req.query.rarity || '';
    const legalities = req.query.legalities || '';
    const releaseDate_max = req.query.releaseDate_max || '';
    const releaseDate_min = req.query.releaseDate_min || '';
    const power = req.query.power || '';
    const toughness = req.query.toughness || '';
    const keywords = req.query.keywords || '';
    const colors = req.query.colors || '';
    let query = {};
    Object.keys(req.query).forEach(field =>{
        if(req.query[field] != ''){            
        
            if(field == "usd_max"){
                if(query["prices.usd"]){
                    query["prices.usd"]["$lt"]=usd_max;
                } else {
                    query["prices.usd"] = {};
                    query["prices.usd"]["$lt"]=usd_max;
                }
            }
            else if(field == "usd_min"){
                if(query["prices.usd"]){
                    query["prices.usd"]["$gt"]=usd_min;
                } else {
                    query["prices.usd"] = {};
                    query["prices.usd"]["$gt"]=usd_min;
                }
            }
            else if(field == "eur_max"){
                if(query["prices.eur"]){
                    query["prices.eur"]["$lt"]=eur_max;
                } else {
                    query["prices.eur"] = {};
                    query["prices.eur"]["$lt"]=eur_max;
                }
            }
            else if(field == "eur_min"){
                if(query["prices.eur"]){
                    query["prices.eur"]["$gt"]=eur_min;
                } else {
                    query["prices.eur"] = {};
                    query["prices.eur"]["$gt"]=eur_min;
                }
            }
            else if(field == "colors" && colors =='Z'){
                query["colors"]= {"$exists":true, $size:0};
            }
            else{
                query[field]=req.query[field];
            }
        }
    })
    const cards = await Card.paginate(query, { page, limit, select:'name image_uris'});
    console.log("QUERY: ", query);
    return res.json(cards);
    
};

module.exports.SQLSearch = (req, res) =>{
    const page = req.query.page || 1;
    const limit = req.query.limit || 30;
    const name = req.query.name || '';
    const collection = req.query.collection || '';
    const usd_max=req.query.usd_max || null;
    const eur_max=req.query.eur_max || null;
    const usd_min=req.query.usd_min || null;
    const eur_min=req.query.eur_min || null;
    const cmc = req.query.cmc || '';
    const rarity = req.query.rarity || '';
    const legalities = req.query.legalities || '';
    const releaseDate_max = req.query.releaseDate_max || '';
    const releaseDate_min = req.query.releaseDate_min || '';
    const power = req.query.power || '';
    const toughness = req.query.toughness || '';
    const keywords = req.query.keywords || '';
    const colors = req.query.colors || '';
    let query = {};
    this.MongoSearch(req,res);
    return;
    Object.keys(req.query).forEach(field =>{
        if(field == "usd_max"){
            query["prices.usd"][[Op.lt]]=usd_max;
        }
        else if(field == "usd_min"){
            query["prices.usd"][[Op.gt]]=usd_min;
        }
        else if(field == "eur_max"){
            query["prices.eur"][[Op.lt]]=eur_max;
        }
        else if(field == "eur_min"){
            query["prices.eur"][[Op.gt]]=eur_min;
        }
        else if(field == "releaseDate_max"){
            query["releaseDate"][[Op.lt]]=releaseDate_max;
        }
        else if(field == "releaseDate_min"){
            query["releaseDate_min"][[Op.gt]]=releaseDate_min;
        }        
        else{
            query[field]=req.query[field];
        }
    })  
    cards = models.Card.findAll({
        include:[{ model: models.CardCollection },{ model: models.CardColor }, { model: models.Keyword },{ model:models.Price }],
        attributes: ['name', 'imageUrisNormal', 'CardCollection.collectionId', 'CardColor.colorId'],
        where: query
    });
    return res.json(cards);
};