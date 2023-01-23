const Weather = require('./getWeather');
const axios = require("axios");
const cheerio = require("cheerio");
// ...
const url =
  "https://www.meteo.nc/nouvelle-caledonie/observations/dernieres-24h?ville=Noumea";
axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
 


$('tr').each((i, tr) => {
    let rowData = {};
    rowData.month = new Date().getMonth() + 1
    // Récupérer le premier td
    rowData.date = $(tr).find('.full').first().text() ;
    // Récupérer le dernier td
    rowData.pluviometrie = $(tr).find('td').last().text();
    rowData.date = rowData.date.split("-");





    
    // Enregistrer les données dans la base de données
   const weather = new Weather(rowData);
    weather.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data saved successfully!");
        }
    });
})});


