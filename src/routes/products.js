const express = require("express");
const router = express.Router();
const path = require("path");

const productsController = require("../controllers/productsController");

//Ruta a listado de todos los productos 
router.get("/", productsController.list);

//Ruta a listado de productos
router.get("/productosCascos", productsController.productosCascos);
router.get("/productosInd", productsController.productosInd);
router.get("/productosCalzado", productsController.productosCalzado);
router.get("/productosEquipamiento", productsController.productosEquipamiento);
router.get("/productosByM", productsController.productosByM);
router.get("/productosUniformes", productsController.productosUniformes);
router.get("/productosAccesorios", productsController.productosAccesorios);

//Ruta a detalle de producto
router.get("/:id", productsController.detail);

module.exports = router;