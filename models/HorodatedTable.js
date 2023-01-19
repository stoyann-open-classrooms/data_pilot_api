const mongoose = require("mongoose");

const HorodatedTableSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Merci d'ajouter un titre pour le tableau"],
      maxlength: [
        25,
        "Le titre d'un Tableau ne peut pas exceder 25 characteres",
      ],
    },
    date: {
      type: String,
      default: "Date",
      unique: false
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


// reverse populate with virtuals 

HorodatedTableSchema.virtual('horodatedLines',  {
  ref:'HorodatedLine',
  localField: '_id',
  foreignField: 'horodatedTable',
  justOne: false
})




module.exports = mongoose.model("HorodatedTable", HorodatedTableSchema);
