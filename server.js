const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");
require('dotenv').config()
//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
const { Sequelize } = require('sequelize');

requireDir("./models");


//rota
app.use("/", require("./routes"));

app.listen(3000, () => {
  console.log('Connected to 3000');
});