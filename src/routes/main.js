const express = require("express");
const router = express.Router();
const path = require("path");

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get('/search', mainController.search);
router.get("/nosotros", mainController.nosotros);
router.get("/productos", mainController.productos);
router.get("/certificaciones", mainController.certificaciones);
router.get("/contacto", mainController.contacto);
router.get("/como-llegar", mainController.comoLlegar);


module.exports=router;