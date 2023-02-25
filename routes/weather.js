const express = require("express");
// get controller function
const { getweathers, createWeather } = require("../controllers/weather");

const router = express.Router();


const advancedResults = require("../middlewares/advancedResults");
const Weather = require("../models/WeatherShema");

router
  .route("/")
  .get(
    advancedResults(Weather),
    getweathers
  ).post(createWeather)


module.exports = router;

