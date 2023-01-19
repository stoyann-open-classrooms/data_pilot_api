const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

// load config DB
const connectDB = require("./config/db");

//load environement variables
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();
// Route files

const tables = require("./routes/tables");
const Horodatedtables = require("./routes/horodatedTables");
const colones = require("./routes/colones");
const lines = require("./routes/lines");

// initialize express  application
const app = express();

// Body parser
app.use(express.json());


// Dev logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


// Mount routers
app.use("/data-pilote/api/v1/tables", tables);
app.use("/data-pilote/api/v1/horodated_tables", Horodatedtables);
app.use("/data-pilote/api/v1/colones", colones);
app.use("/data-pilote/api/v1/lines", lines);

const PORT = process.env.PORT || 5550;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} root URL : http://localhost:${PORT}/data-pilote/api/v1`
      .white.underline.bold.bgGreen
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
