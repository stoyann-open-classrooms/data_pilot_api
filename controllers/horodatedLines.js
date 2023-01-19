const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const HorodatedLine = require("../models/HorodatedLine");

//@description:     Get all horodated lines
//@ route:          GET /data-pilote/api/v1/horodated_lines
//@access:          Public
exports.getHorodatedLines = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});



//@description:     Get a single horodated line
//@ route:          GET /data-pilote/api/v1/horodated_lines/:id
//@access:          Public
exports.getHorodatedLine = asyncHandler(async (req, res, next) => {
    const horodatedLine = await HorodatedLine.findById(req.params.id);
    if (!horodatedLine) {
      return next(
        new ErrorResponse(`Aucune ligne horodaté trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: horodatedLine });
  });
  




//@description:     Create horodated line
//@ route:          POST /data-pilote/api/v1/horodated_lines
//@access:          Public
exports.createHorodatedLines = asyncHandler(async (req, res, next) => {
    const horodatedLine = await HorodatedLine.create(req.body);
    res.status(201).json({
      success: true,
      data: horodatedLine,
    });
  });



 //@description:     Update  horodated line
//@ route:          PUT /data-pilote/api/v1/horodated_lines/:id
//@access:          Public
exports.updateHorodatedLine = asyncHandler(async (req, res, next) => {
    const horodatedLine = await HorodatedLine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!horodatedLine) {
      return next(
        new ErrorResponse(`Aucune ligne horodaté trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: horodatedLine});
  });




  //@description:     Delete horodated line
//@ route:          DELETE /data-pilote/api/v1/horodated_lines/:id
//@access:          Public
exports.deleteHorodatedLine = asyncHandler(async (req, res, next) => {
    const horodatedLine = await HorodatedLine.findByIdAndDelete(req.params.id);
    if (!horodatedLine) {
      return next(
        new ErrorResponse(`Aucune horodatedLine trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  });
  