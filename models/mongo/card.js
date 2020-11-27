const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const imageSchema = new mongoose.Schema({
  small:{
    type: String, // linguagem
  },
  normal:{
    type: String, 
  },
  large:{
    type: String, 
  },
  png:{
    type: String, 
  },
  art_crop:{
    type: String, 
  },
  border_crop:{
    type: String, 
  }
})
const legalitiesSchema = new mongoose.Schema({
  standard: {
    type: String,
  },
  future: {
    type: String,
  },
  historic: {
    type: String,
  },
  pioneer: {
    type: String,
  },
  modern: {
    type: String,
  },
  legacy: {
    type: String,
  },
  pauper: {
    type: String,
  },
  vintage: {
    type: String,
  },
  penny: {
    type: String,
  },
  commander: {
    type: String,
  },
  brawl: {
    type: String,
  },
  duel: {
    type: String,
  },
  oldschool: {
    type: String,
  }
});
const PriceSchema = new mongoose.Schema({
usd: {
  type: mongoose.Decimal128
},
usd_foil: {
  type: mongoose.Decimal128
},
eur: {
  type: mongoose.Decimal128
},
eur_foil: {
  type: mongoose.Decimal128
}
}, { timestamps: { createdAt: 'created_at' } })
const CardSchema = new mongoose.Schema({
  id:{
    type: String,
  },
  name: {
    type: String, // nome
  },
  lang: {
    type: String, // linguagem
  },
  release_at: {
    type: Date, // data de lançamento
  },
  uri: {
    type: String, // link do objeto da carta na api do scryfall
  },
  layout: {
    type: String, // tipo da carta, ex: normal, saga, aventura, token TODO: criar uma tabela pra isso
  },
  image_uris: {
    type: imageSchema, // imagem da carta - do tipo "normal"
  },
  mana_cost: {
    type: String, // custo de mana
  },
  cmc: {
    type: mongoose.Decimal128, // custo de mana convertido 
  },
  type_line: {
    type: String, // texto do tipo da carta, ex: Creatura - Orc Warrior
  },
  oracle_text: {
    type: String, // descrição da carta
  },
  power: {
    type: String, // poder
  },
  toughness: {
    type: String, // resistencia
  },
  reserved: {
    type: Boolean, // reservada
  },
  foil: {
    type: Boolean, // se tem foil
  },
  nonFoil: {
    type: Boolean, // se tem não-foil
  },
  oversized: {
    type: Boolean, // se tem oversized
  },
  promo: {
    type: Boolean, // se é promo
  },
  collector_number: {
    type: String, // numero da carta
  },
  rarity: {
    type: String, // raridade da carta
  },
  booster: {
    type: Boolean, // se vem em booster
  },
  legalities: {
    type: legalitiesSchema,
  },  
  artist: {
    type: String,
  },
  prices:{
    type:[PriceSchema],
  },
  price_variation:{
    type: mongoose.Decimal128,
  },//TODO todas as moedas
  colors:[String],
  keywords:[String],
  set: {
    type: String,
  },
  set_name: {
    type: String,
  },
  set_type: {
    type: String,
  },
  set_uri: {
    type: String
  },
});

CardSchema.plugin(mongoosePaginate);
mongoose.model("Card", CardSchema);