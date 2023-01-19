const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const StaticLine = require("../models/StaticLine");

//@description:     Get all static lines
//@ route:          GET /data-pilote/api/v1/static_lines
//@access:          Public
exports.getStaticLines = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});


//@description:     Get a single static line
//@ route:          GET /data-pilote/api/v1/static_lines/:id
//@access:          Public
exports.getStaticLine = asyncHandler(async (req, res, next) => {
    const staticLine = await StaticLine.findById(req.params.id);
    if (!staticLine) {
      return next(
        new ErrorResponse(`Aucune ligne satique trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: staticLine });
  });
  




//@description:     Create static line 
//@ route:          POST /data-pilote/api/v1/static_lines
//@access:          Public
exports.createStaticLine = asyncHandler(async (req, res, next) => {
    const staticLine = await StaticLine.create(req.body);
    res.status(201).json({
      success: true,
      data: staticLine,
    });
  });

  
  
    //@description:     Update static line
//@ route:          PUT /data-pilote/api/v1/static_lines/:id
//@access:          Public
exports.updateStaticLine = asyncHandler(async (req, res, next) => {
    const staticLine = await StaticLine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!staticLine) {
      return next(
        new ErrorResponse(`Aucune ligne trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: staticLine });
  });



  
    //@description:     Delete line
//@ route:          DELETE /krysto/api/v1/lines/:id
//@access:          Public
exports.deleteStaticLine = asyncHandler(async (req, res, next) => {
    const staticLine = await StaticLine.findByIdAndDelete(req.params.id);
    if (!staticLine) {
      return next(
        new ErrorResponse(`Aucune ligne trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  });
  