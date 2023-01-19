const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Merci d'ajouter un nom pour votre tableau"],
      unique: [true, "Une table avec ce nom existe déja, merci de choisir un autre nom pour la table"], 
      trim: true,
      maxlength: [
        25,
        "Le titre d'un tableau ne peut pas contenir plus de 25 characteres",
      ],
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

module.exports = mongoose.model("Table", TableSchema);
