const mongoose = require("mongoose");

const ColoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Merci d'ajouter un titre pour la colone"],
      trim: true,
      maxlength: [
        25,
        "Le titre d'une colone ne peut pas exceder 25 characteres",
      ],
    },

  
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Colone", ColoneSchema);
