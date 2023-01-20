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
    tabletype: {
     type: String,
     default: "Satique"
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

StaticTableSchema.virtual('staticLines',  {
  ref:'StaticLine',
  localField: '_id',
  foreignField: 'staticTable',
  justOne: false
})


module.exports = mongoose.model("StaticTable", StaticTableSchema);
