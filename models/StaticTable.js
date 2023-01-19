const mongoose = require("mongoose");

const StaticTableSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Merci d'ajouter un titre pour le tableau"],
      trim: true,
      maxlength: [
        25,
        "Le titre d'un tableau ne peut pas exceder 25 characteres",
      ],
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

module.exports = mongoose.model("StaticTable", StaticTableSchema);
