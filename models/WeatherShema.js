const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const cron = require("node-cron");

const Schema = mongoose.Schema;

const WeatherSchema = new Schema(
  {
    month: {
      type: Number,
      
    },
    date: {
      type: String,
      
    },
    pluviometrie: {
      type: String,
      
    },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Weather = mongoose.model("Weather", WeatherSchema);

// const getWeather =  function() {
//     console.log("scrapping code here");
//     const url =
//     "https://www.meteo.nc/nouvelle-caledonie/observations/dernieres-24h?ville=Noumea";
//   axios(url).then((response) => {
//     const html = response.data;
//     const $ = cheerio.load(html);
//     let data = []
//     $('tr').each((i, tr) => {
//       let rowData = {};
//       rowData.month = new Date().getMonth() + 1
//       // Récupérer le premier td
//       rowData.date = $(tr).find('.full').first().text() ;
//       // Récupérer le dernier td
//       rowData.pluviometrie = $(tr).find('td').last().text();
//       rowData.date = rowData.date.split("-");
//       data.push(rowData);
//   });
//   return data;
//   });
// }

const url =
  "https://www.meteo.nc/nouvelle-caledonie/observations/dernieres-24h?ville=Noumea";
axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  let data = [];
  $("tr").each((i, tr) => {
    let rowData = {};
    rowData.month = new Date().getMonth() + 1;
    // Récupérer le premier td
    rowData.date = $(tr).find(".full").first().text();
    // Récupérer le dernier td
    rowData.pluviometrie = $(tr).find("td").last().text();
    // rowData.date = rowData.date.split("-");
    data.push(rowData);
  });

  // Schedule task to run every day at 3:00 am
  cron.schedule("48 2 * * *", async function () {
    console.log("running a task every day at 11:45 am");

    data.forEach(async (item) => {
      console.log(item);
      await Weather.create(item);
    });
  });
});

module.exports = mongoose.model("Weather", WeatherSchema);
