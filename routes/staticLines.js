const express = require("express");
// get controller function
const { getStaticLines, createStaticLine, updateStaticLine, getStaticLine, deleteStaticLine } = require("../controllers/staticLines");

const router = express.Router();

const StaticLine = require("../models/StaticLine");
const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(StaticLine), getStaticLines).post(createStaticLine);
router.route("/:id").get(getStaticLine).put(updateStaticLine).delete(deleteStaticLine)
module.exports = router;
