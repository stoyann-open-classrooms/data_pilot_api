const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models


const Table = require('./models/Table');
const HorodatedTable = require('./models/HorodatedTable');
const Colone = require('./models/Colone');
const Line = require('./models/Line');





// Connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

// Read JSON files


const tables = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/tables.json`, 'utf-8')
  );
const horodatedTables = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/horodated.json`, 'utf-8')
  );

const colones = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/colones.json`, 'utf-8')
  );
const lines = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/lines.json`, 'utf-8')
  );





// Import into DB
const importData = async () => {
  try {
   

    await Table.create(tables);
   await HorodatedTable.create(horodatedTables)
    await Colone.create(colones);
    await Line.create(lines);

    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
   
    await Table.deleteMany();
   await HorodatedTable.deleteMany();
    await Colone.deleteMany();
    await Line.deleteMany();

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
