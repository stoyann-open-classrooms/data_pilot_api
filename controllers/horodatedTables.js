const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const HorodatedTable = require("../models/HorodatedTable");

//@description:     Get all horodated tables
//@ route:          GET /data-pilote/api/v1/horodated_tables
//@access:          Public
exports.getHorodatedTables = asyncHandler(async (req, res, next) => {
 
  res
    .status(200)
    .json(res.advancedResults);
});




//@description:     Get a single horodated table
//@ route:          GET /data-pilote/api/v1/horodated_tables/:id
//@access:          Public
exports.getHorodatedTable = asyncHandler(async (req, res, next) => {
    const horodatedTable = await HorodatedTable.findById(req.params.id).populate("horodatedLines");
    if (!horodatedTable) {
      return next(
        new ErrorResponse(`Aucune tableaux horodaté trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: horodatedTable });
  });
  



//@description:     Create horodated table 
//@ route:          POST /data-pilote/api/v1/horodated_tables
//@access:          Public
exports.createHorodatedTable = asyncHandler(async (req, res, next) => {
    const horodatedTable = await HorodatedTable.create(req.body);
    res.status(201).json({
      success: true,
      data: horodatedTable,
    });
  });


//   //@description:     Update a horodated table
// //@ route:          PUT /krysto/api/v1/horodated_tables/:id
// //@access:          Public
// exports.updateHorodatedTable = asyncHandler(async (req, res, next) => {
//     const horodatedTable = await HorodatedTable.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!horodatedTable) {
//       return next(
//         new ErrorResponse(`Aucune table horodaté trouvée avec l'identifiant ${req.params.id}`, 404)
//       );
//     }
//     res.status(200).json({ success: true, data: horodatedTable });
//   });



//@description:     Update static table
//@ route:          PUT /data-pilote/api/v1//horodated_tables//:id
//@access:          Public
exports.updateHorodatedTable = asyncHandler(async (req, res, next) => {
  const horodatedTable = await HorodatedTable.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!horodatedTable) {
    return next(
      new ErrorResponse(`Aucune table trouvée avec l'identifiant ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: horodatedTable });
});












    //@description:     Delete horodated table
//@ route:          DELETE /krysto/api/v1/horodated_tables/:id
//@access:          Public
exports.deleteHorodatedTable = asyncHandler(async (req, res, next) => {
    const horodatedTable = await HorodatedTable.findByIdAndDelete(req.params.id);
    if (!horodatedTable) {
      return next(
        new ErrorResponse(`Aucun tableau horodatée trouvée avec l'identifiant ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  });
  