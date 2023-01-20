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
    tabletype: {
      type: String,
      default: "Horodatées"
     },
    date: {
      type: String,
      default: "Date",
      unique: false
    },
    champs1: {
      type: String,
      default: null
    },
    champs2: {
      type: String,
      default: null
    },
    champs3: {
      type: String,
      default: null
    },
    champs4: {
      type: String,
      default: null
    },
    champs5: {
      type: String,
      default: null
    },
    champs6: {
      type: String,
      default: null
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
