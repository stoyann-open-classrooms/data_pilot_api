const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

const Weather = require("../models/WeatherShema");

//@description:     Get all horodated lines
//@ route:          GET /data-pilote/api/v1/weather
//@access:          Public
exports.getweathers = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});




//@description:     Create horodated line
//@ route:          POST /data-pilote/api/v1/horodated_lines
//@access:          Public
exports.createWeather = asyncHandler(async (req, res, next) => {
    const weather = await Weather.create(req.body);
    res.status(201).json({
      success: true,
      data: weather,
    });
  });

