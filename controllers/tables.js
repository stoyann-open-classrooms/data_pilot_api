const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Table = require("../models/Table");

//@description:     Get all articles
//@ route:          GET /data-pilote/api/v1/tables
//@access:          Public
exports.getTables = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});


//@description:     Get a single table
//@ route:          GET /data-pilote/api/v1/tables/:id
//@access:          Public
exports.getTable = asyncHandler(async (req, res, next) => {
  const table = await Table.findById(req.params.id).populate('colones');
  if (!table) {
    return next(
      new ErrorResponse(`Aucune table trouvée avec l'identifiant ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: table });
});



//@description:     Create table
//@ route:          POST /data-pilote/api/v1/tables
//@access:          Private
exports.createTable = asyncHandler(async (req, res, next) => {
  const table = await Table.create(req.body);
  res.status(201).json({
    success: true,
    data: table,
  });
});


//@description:     Update a table
//@ route:          PUT /krysto/api/v1/tables/:id
//@access:          Private
exports.updateTable = asyncHandler(async (req, res, next) => {
  const table = await Table.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!table) {
    return next(
      new ErrorResponse(`Aucune table trouvée avec l'identifiant ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: table });
});



   //@description:     Delete table
//@ route:          DELETE /krysto/api/v1/table/:id
//@access:          Public
exports.deleteTable = asyncHandler(async (req, res, next) => {
  const table = await Table.findByIdAndDelete(req.params.id);
  if (!table) {
    return next(
      new ErrorResponse(`Aucune table trouvée avec l'identifiant ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});
