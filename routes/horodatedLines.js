const express = require("express");
// get controller function
const { createHorodatedLines, getHorodatedLine, updateHorodatedLine, deleteHorodatedLine, getHorodatedLines } = require("../controllers/horodatedLines");

const router = express.Router();

const HorodatedLine = require("../models/HorodatedLine");
const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(HorodatedLine), getHorodatedLines).post(createHorodatedLines);
router.route("/:id").get(getHorodatedLine).put(updateHorodatedLine).delete(deleteHorodatedLine)
module.exports = router;
