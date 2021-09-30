const express = require("express");
const router = express.Router();
const path = require("path");

const productsController = require("../controllers/productsController");

//Ruta a listado de todos los productos 
router.get("/", productsController.list);

//Ruta a listado de productos de indumentaria
router.get("/productosInd", productsController.productosInd);

//Ruta a detalle de producto
router.get("/:id", productsController.detail);

module.exports = router;