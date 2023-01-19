const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Colone = require("../models/Colone");

//@description:     Get all colones
//@ route:          GET /data-pilote/api/v1/colones
//@access:          Public
exports.getColones = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});



//@description:     Get a single colone
//@ route:          GET /data-pilote/api/v1/colones/:id
//@access:          Public
exports.getColone = asyncHandler(async (req, res, next) => {
    const colone = await Colone.findById(req.params.id);
    if (!colone) {
      return next(
        new ErrorResponse(`Aucune colone trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: colone });
  });
  




//@description:     Create colone
//@ route:          POST /data-pilote/api/v1/colones
//@access:          Public
exports.createColones = asyncHandler(async (req, res, next) => {
    const colone = await Colone.create(req.body);
    res.status(201).json({
      success: true,
      data: colone,
    });
  });



 //@description:     Update colone 
//@ route:          PUT /krysto/api/v1/colones/:id
//@access:          Public
exports.updateColone = asyncHandler(async (req, res, next) => {
    const colone = await Colone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!colone) {
      return next(
        new ErrorResponse(`Aucune colone trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: colone});
  });




  //@description:     Delete colone
//@ route:          DELETE /krysto/api/v1/colones/:id
//@access:          Public
exports.deleteColone = asyncHandler(async (req, res, next) => {
    const colone = await Colone.findByIdAndDelete(req.params.id);
    if (!colone) {
      return next(
        new ErrorResponse(`Aucune colone trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  });
  