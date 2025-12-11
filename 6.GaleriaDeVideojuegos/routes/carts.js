const express = require("express");
const route = express.Router();
const carritoController = require("../controllers/carrito");


route.get("/games/cart", carritoController)

// tiene que haber la funcion de sumar la cantidad y la de sumar el precio.