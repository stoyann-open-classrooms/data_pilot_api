const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");


//load environement variables
dotenv.config({ path: "./config/config.env" });


const PORT = process.env.PORT || 5000;

// initialize express  application
const app = express();


const server = app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT} root URL : http://localhost${PORT}/data-pilote/api/: `
        .white.underline.bold.bgGreen
    )
  );