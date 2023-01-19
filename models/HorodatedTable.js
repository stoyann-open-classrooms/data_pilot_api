const mongoose = require("mongoose");

const HorodatedTableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Merci d'ajouter un nom pour votre tableau"],
      unique: true,
      trim: true,
      maxlength: [
        25,
        "Le titre d'un tableau ne peut pas exceder 25 characteres",
      ],
    },

    dateColone: {
      type: String,
      default: "Date",
      required: true,
    },

    colones: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Colone",
      },
    ],
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("HorodatedTable", HorodatedTableSchema);
