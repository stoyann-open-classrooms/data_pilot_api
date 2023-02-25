const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const helmet = require("helmet");

// load config DB
const connectDB = require("./config/db");

//load environement variables
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();
// Route files

const staticTables = require("./routes/staticTables");
const horodatedtables = require("./routes/horodatedTables");
const horodatedLines = require("./routes/horodatedLines");
const staticLines = require("./routes/staticLines");
const weathers = require("./routes/weather");

// initialize express  application
const app = express();

// Body parser
app.use(express.json());

// Dev logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Enable CORS
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Mount routers
app.use("/data-pilote/api/v1/static_tables", staticTables);
app.use("/data-pilote/api/v1/horodated_tables", horodatedtables);
app.use("/data-pilote/api/v1/static_lines", staticLines);
app.use("/data-pilote/api/v1/horodated_lines", horodatedLines);
app.use("/data-pilote/api/v1/weathers", weathers);

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
