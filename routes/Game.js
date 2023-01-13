const express = require("express");
const app = express();
const router = express.Router();    //Definir rutas
const jwt = require("jsonwebtoken");
const gameController = require("../controller/gameController.js");
const jwtKey = "my_secret";

// router.get("/", gameController.getGames);

router.get("/:id", gameController.getGame);

router.get("/page/next", gameController.getNewPage);

router.post("/", gameController.postGame);

module.exports = router;