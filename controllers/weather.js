const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const axios = require("axios");
const cheerio = require("cheerio");
const cron = require("node-cron");


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


  const url = "https://www.meteo.nc/nouvelle-caledonie/observations/dernieres-24h?ville=Noumea";
  axios(url).then(async (response) => {  
    const html = response.data;
    const $ = cheerio.load(html);
    let data = [];
    $("tr").each((i, tr) => {
      let rowData = {};
      rowData.month = new Date().getMonth() + 1;
      // Récupérer le premier td
      rowData.date = $(tr).find(".full").first().text() + " - " + new Date().getMonth()+1 + "/" + new Date().getFullYear();
      // Récupérer le dernier tdh
      rowData.pluviometrie = $(tr).find("td").last().text();
      data.push(rowData);
    });
  
    // Planifie une tâche à exécuter tous les jours à 23h45
    cron.schedule("10  17 * * *", async function () {
      console.log("running a task every day at 23:45 am");
      data.forEach(async (item) => {
        const existingData = await Weather.findOne({ date: item.date });
        if (!existingData) {
          await Weather.create(item);
        } else {
          await Weather.updateOne({ date: item.date }, item);
        }
      });
    });
  });