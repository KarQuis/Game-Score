const express = require("express");
const app = express();
const router = express.Router();    //Definir rutas
const jwt = require("jsonwebtoken");
const reviewController = require("../controller/reviewController.js");
const jwtKey = "my_secret";

router.get("/", reviewController.getReviews);

router.post("/", reviewController.postReview);

module.exports = router;