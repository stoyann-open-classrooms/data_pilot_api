const express = require("express");
// get controller function
const { getHorodatedTables, createHorodatedTable, getHorodatedTable, deleteHorodatedTable, updateHorodatedTable } = require("../controllers/horodatedTables");

const router = express.Router();

const HorodatedTable = require("../models/HorodatedTable");
const advancedResults = require("../middlewares/advancedResults");


router.route("/").get(advancedResults(HorodatedTable, "horodatedLines"), getHorodatedTables).post(createHorodatedTable);
router.route("/:id").get(getHorodatedTable).put(updateHorodatedTable).delete(deleteHorodatedTable)
module.exports = router;
