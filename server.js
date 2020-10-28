const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
require('dotenv').config()
//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
const { Sequelize } = require('sequelize');

//iniciando o DB
mongoose.connect("mongodb://localhost:27017/bd2-database", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./models/mongo");
const Card = mongoose.model("Card");
const User = mongoose.model("User");

//rota
app.use("/", require("./routes"));

app.listen(3000, () => {
  console.log('Connected to 3000');
});