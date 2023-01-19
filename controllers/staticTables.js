const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const StaticTable = require("../models/StaticTable");

//@description:     Get all static tables
//@ route:          GET /data-pilote/api/v1/static_tables
//@access:          Public
exports.getStaticTables = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});


//@description:     Get a single static table
//@ route:          GET /data-pilote/api/v1/static_tables/:id
//@access:          Public
exports.getStaticTable = asyncHandler(async (req, res, next) => {
  const staticTable = await StaticTable.findById(req.params.id);
  if (!staticTable) {
    return next(
      new ErrorResponse(`Aucune table trouvée avec l'identifiant ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: staticTable });
});



//@description:     Create static tablee
//@ route:          POST /data-pilote/api/v1/tables
//@access:          Public
exports.createStaticTable = asyncHandler(async (req, res, next) => {
  const staticTable = await StaticTable.create(req.body);
  res.status(201).json({
    success: true,
    data: staticTable,
  });
});


//@description:     Update static table
//@ route:          PUT /data-pilote/api/v1/static_tables/:id
//@access:          Public
exports.updateStaticTable = asyncHandler(async (req, res, next) => {
  const staticTable = await StaticTable.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!staticTable) {
    return next(
      new ErrorResponse(`Aucune table trouvée avec l'identifiant ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: staticTable });
});



   //@description:     Delete static table
//@ route:          DELETE /data-pilote/api/v1/static_tables/:id
//@access:          Public
exports.deleteStaticTable = asyncHandler(async (req, res, next) => {
  const staticTable = await StaticTable.findByIdAndDelete(req.params.id);
  if (!staticTable) {
    return next(
      new ErrorResponse(`Aucune table trouvée avec l'identifiant ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});
