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
      unique:true,
    },
    tabletype: {
      type: String,
      default: "horodated-table"
     },
    date: {
      type: String,
      default: "Date",
      unique: false
    },
   
      champ1: { type: String },
      champ2: { type: String },
      champ3: { type: String },
      champ4: { type: String },
      champ5: { type: String },
      champ6: { type: String },
   
    link: {
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

function arrayLimit(val) {
  return val.length <= 6;
}

// reverse populate with virtuals 

HorodatedTableSchema.virtual('horodatedLines',  {
  ref:'HorodatedLine',
  localField: '_id',
  foreignField: 'horodatedTable',
  justOne: false
})


HorodatedTableSchema.pre('save', function(next) {
  this.link = `http://localhost:3000/${this.tabletype}/${this._id}`
  next()
});



module.exports = mongoose.model("HorodatedTable", HorodatedTableSchema);
