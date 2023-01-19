const express = require("express");
// get controller function
const { getColones, createColones, getColone, updateColone, deleteColone } = require("../controllers/colones");

const router = express.Router();

const Colone = require("../models/Colone");
const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(Colone), getColones).post(createColones);
router.route("/:id").get(getColone).put(updateColone).delete(deleteColone)
module.exports = router;
