const express = require("express");
const app = express();
const router = express.Router();    //Definir rutas
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret";
const categoryController = require("../controller/categoryController.js");

router.get("/", categoryController.getCategorys);

router.post("/", categoryController.postCategory);

module.exports = router;