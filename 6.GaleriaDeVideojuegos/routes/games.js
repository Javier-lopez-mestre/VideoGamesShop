const express = require("express");
const route = express.Router();
const gameController = require("../controllers/games");



route.get("/", gameController.getGameList);

route.get("/add-game", gameController.getAddGame);

route.get("/games/:id", gameController.getGameDetail);

route.post("/games/add-game", gameController.postAddGame);


module.exports = route;