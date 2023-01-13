const express = require("express");
const app = express();
const router = express.Router();    //Definir rutas
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret";
const categoryGameController = require("../controller/categoryGameController.js");

router.get("/", categoryGameController.getCategoryGame);

router.post("/", categoryGameController.postCategoryGame);

module.exports = router;