const mongoose = require("mongoose");

const Card = mongoose.model("Card");

module.exports.MongoSearch = async (req, res) => {
    
    const page = req.query.page || 1;
    const limit = req.query.limit || 30;
    const name = req.query.name || '';
    const collection = req.query.collection || '';
    const usd_max=req.query.usd_max || null;
    const usd_foil_max=req.query.usd_foil_max || null;
    const eur_max=req.query.eur_max || null;
    const eur_foil_max=req.query.eur_foil_max || null;
    const usd_min=req.query.usd_min || null;
    const usd_foil_min=req.query.usd_foil_min || null;
    const eur_min=req.query.eur_min || null;
    const eur_foil_min=req.query.eur_foil_min || null;
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
        //TODO
        if(field == usd_max){
            query["prices.usd"]={"$lt": usd_max};
        }
        if(field == usd_max){}
        // ...
        else{
            query[field]=req.query[field];
        }

    })
    const cards = await Card.paginate(
    //     {$or:[
    //     {name},
    //     {collection},
    //     {"prices.usd":{"$lt": usd_max}},
    //     {"prices.usd_foil":{"$lt": usd_foil_max}},
    //     {"prices.eur":{"$lt": eur_max}},
    //     {"prices.eur_foil":{"$lt": eur_foil_max}},
    //     {"prices.usd":{"$gt": usd_min}},
    //     {"prices.usd_foil":{"$gt": usd_foil_min}},
    //     {"prices.eur":{"$gt": eur_min}},
    //     {"prices.eur_foil":{"$gt": eur_foil_min}},
    //     {cmc},
    //     {rarity},
    //     {format},
    //     {"releaseDate": {"$lt": releaseDate_max}},
    //     {"releaseDate": {"$gt": releaseDate_min}},
    //     {power},
    //     {toughness},
    //     {keywords},
    //     {colors}
    // ]}
    query, { page, limit, select:'name'});
    console.log("QUERY: ", query);
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