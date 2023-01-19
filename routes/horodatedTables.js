const express = require("express");
// get controller function
const { getHorodatedTables, createHorodatedTable, getHorodatedTable, deleteHorodatedTable } = require("../controllers/horodatedTables");

const router = express.Router();

const HorodatedTable = require("../models/HorodatedTable");
const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(HorodatedTable), getHorodatedTables).post(createHorodatedTable);
router.route("/:id").get(getHorodatedTable).put(getHorodatedTable).delete(deleteHorodatedTable)
module.exports = router;
