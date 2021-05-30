const express = require("express");
const router = express.Router();
const path = require("path");

const maninController = require("../controllers/mainController");

router.get("/", maninController.index);

module.exports=router;