const express = require("express");
// get controller function
const { getStaticTables, createStaticTable, getStaticTable, updateStaticTable, deleteStaticTable } = require("../controllers/staticTables");

const router = express.Router();

const StaticTable = require("../models/StaticTable");
const advancedResults = require("../middlewares/advancedResults");

router
  .route("/")
  .get(
    advancedResults(StaticTable, "staticLines"),
    getStaticTables
  )
  .post(createStaticTable);
router.route("/:id").get(getStaticTable).put(updateStaticTable).delete(deleteStaticTable);

module.exports = router;
