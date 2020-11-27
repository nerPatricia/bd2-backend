const mongoose = require("mongoose");

const Card = mongoose.model("Card");

module.exports.MongoSearch = async (req, res) => {
    
    const page = req.query.page || 1;
    const limit = req.query.limit || 30;
    const name = req.query.name || '';
    const collection = req.query.collection || '';
    const usd_max=req.query.usd_max || 0;
    const usd_foil_max=req.query.usd_foil_max || 0;
    const eur_max=req.query.eur_max || 0;
    const eur_foil_max=req.query.eur_foil_max || 0;
    const usd_min=req.query.usd_min || 0;
    const usd_foil_min=req.query.usd_foil_min || 0;
    const eur_min=req.query.eur_min || 0;
    const eur_foil_min=req.query.eur_foil_min || 0;
    const mana_cost = req.query.mana_cost || '';
    const rarity = req.query.rarity || '';
    const format = req.query.format || '';
    const releaseDate_max = req.query.releaseDate_max || '';
    const releaseDate_min = req.query.releaseDate_min || '';
    const power = req.query.power || '';
    const toughness = req.query.toughness || '';
    const keyword = req.query.keyword || '';
    const cards = await Card.paginate({$or:[
        {name},
        {collection},
        {"prices.usd":{"$lt": usd_max}},
        {"prices.usd_foil":{"$lt": usd_foil_max}},
        {"prices.eur":{"$lt": eur_max}},
        {"prices.eur_foil":{"$lt": eur_foil_max}},
        {"prices.usd":{"$gt": usd_min}},
        {"prices.usd_foil":{"$gt": usd_foil_min}},
        {"prices.eur":{"$gt": eur_min}},
        {"prices.eur_foil":{"$gt": eur_foil_min}},
        {mana_cost},
        {rarity},
        {format},
        {"releaseDate": {"$lt": releaseDate_max}},
        {"releaseDate": {"$gt": releaseDate_min}},
        {power},
        {toughness},
        {keyword},
    ]}, { page, limit });
    return res.json(cards);
    
};

module.exports.SQLSearch = (req, res) =>{
    const {
        page,
        limit,
        name,
        collection,
        price_max,
        price_min,
        mana_cost,
        rarity,
        format,
        releaseDate_max,
        releaseDate_min,
        power,
        toughness,
        keyword
    } = req.query
};