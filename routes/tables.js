const express = require("express");
// get controller function
const { getTables, getTable, createTable, updateTable, deleteTable } = require("../controllers/tables");

const router = express.Router();

const Table = require("../models/Table");
const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(Table , {
    path: "colones",
    select: "name",
}), getTables).post(createTable);
router.route("/:id").get(getTable).put(updateTable).delete(deleteTable)

module.exports = router;
