const mongoose = require("mongoose");

const HorodatedLineSchema = new mongoose.Schema(
  {
    horodatedTable: {
      type: mongoose.Types.ObjectId,
      ref: "HorodatedTable",
      required: true
    },

    date: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    champs1: {
      type: String,
    },
    champs2: {
      type: String,
    },
    champs3: {
      type: String,
    },
    champs4: {
      type: String,
    },
    champs5: {
      type: String,
    },
    champs6: {
      type: String,
    },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("HorodatedLine", HorodatedLineSchema);
