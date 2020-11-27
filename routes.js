const express = require("express");
const routes = express.Router();

const requestController = require("./controllers/request");
const searchController = require("./controllers/SearchController");

// get all cards since 1990
routes.get("/get-all-cards", requestController.getAllCards);
//Ad-hoc Mongo
routes.get("/mongo/search", searchController.MongoSearch);
//Ad-hoc SQL
routes.get("/sql/search", searchController.SQLSearch);

module.exports = routes;    