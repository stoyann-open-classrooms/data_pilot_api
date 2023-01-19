const express = require("express");
// get controller function
const { getLines, createLine, getLine, updateLine, deleteLine } = require("../controllers/lines");

const router = express.Router();

const Line = require("../models/Line");
const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(Line), getLines).post(createLine);
router.route("/:id").get(getLine).put(updateLine).delete(deleteLine)
module.exports = router;
