const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models


const StaticTable = require('./models/StaticTable');
const HorodatedTable = require('./models/HorodatedTable');
const HorodatedLine = require('./models/HorodatedLine');
const StaticLine = require('./models/StaticLine');





// Connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

// Read JSON files


const staticTables = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/static_tables.json`, 'utf-8')
  );
const horodatedTables = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/horodated_tables.json`, 'utf-8')
  );

const horodatedLines = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/horodated_lines.json`, 'utf-8')
  );
const staticLines = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/static_lines.json`, 'utf-8')
  );





// Import into DB
const importData = async () => {
  try {
   

    await StaticTable.create(staticTables);
   await HorodatedTable.create(horodatedTables)
    await HorodatedLine.create(horodatedLines);
    await StaticLine.create(staticLines);

    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
   
    await StaticTable.deleteMany();
   await HorodatedTable.deleteMany();
    await HorodatedLine.deleteMany();
    await StaticLine.deleteMany();

    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
