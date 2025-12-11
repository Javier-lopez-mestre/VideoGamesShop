const fs = require("fs");
const path = require("path");
const { title } = require("process");

const videogame = require("../models/videogame");

const videogames = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/games.json"), "utf-8")
);

exports.getGameList = (req, res) => {
  videogame.getAll((games) => {
    games = games.map((game) => {
      return [...game, shopId, generateShopId(game)];
    })
  });
};

exports.getGameDetail = (req, res) => {

  videogame.getGameById(req.params.id, (err, game) => {
    if (!game) {
      return res.status(404).send("Game not found");
    }
    
    res.render("game-details", {
      title: game.title,
      game: game
    });
  })
};


exports.getAddGame = (req, res, next) => {
  res.render("add-game" ,{title: "Add New Game"});
};


exports.postAddGame = (req, res, next) => {
  videogame.getLastId(id),() => {
    const videogame = new videogame(
      10,
      req.body.title,
      req.body.developer,
      req.body.genre,
      req.body.release_year,
      req.body.description,
      req.body.image
    );

    const filepath = path.join(__dirname, "..", "data", "games.json");
    const games = require("../data/games.json");
  
    videogame.save();
  
    games.push(newGame);
  
    fs.writeFile(filepath, JSON.stringify(games), (err) => {
      if (err) {
        console.log(err);
      }
      res.redirect("add-game");
    });
  }

};


// Hacer el delete game, vista nueva, nueva ruta, en el controlador, etc...

// 2 controladores, 1 administracion de los juegos

// Convertir en tienda online, json añadir price, añadir boton de add to cart, si se clica al carrito mostrar lo qe se ha añadido: precio, cantidad,etc.