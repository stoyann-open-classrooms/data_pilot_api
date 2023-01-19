const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Line = require("../models/Line");

//@description:     Get all lines
//@ route:          GET /data-pilote/api/v1/lines
//@access:          Public
exports.getLines = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});


//@description:     Get a single line
//@ route:          GET /data-pilote/api/v1/lines/:id
//@access:          Public
exports.getLine = asyncHandler(async (req, res, next) => {
    const line = await Line.findById(req.params.id);
    if (!line) {
      return next(
        new ErrorResponse(`Aucune ligne trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: line });
  });
  




//@description:     Create line 
//@ route:          POST /data-pilote/api/v1/lines
//@access:          Public
exports.createLine = asyncHandler(async (req, res, next) => {
    const line = await Line.create(req.body);
    res.status(201).json({
      success: true,
      data: line,
    });
  });

  
  
    //@description:     Update line
//@ route:          PUT /krysto/api/v1/lines/:id
//@access:          Public
exports.updateLine = asyncHandler(async (req, res, next) => {
    const line = await Line.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!line) {
      return next(
        new ErrorResponse(`Aucune ligne trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: line });
  });



  
    //@description:     Delete line
//@ route:          DELETE /krysto/api/v1/lines/:id
//@access:          Public
exports.deleteLine = asyncHandler(async (req, res, next) => {
    const line = await Line.findByIdAndDelete(req.params.id);
    if (!line) {
      return next(
        new ErrorResponse(`Aucune ligne trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  });
  