const mongoose = require("mongoose");

const StaticTableSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Merci d'ajouter un titre pour le tableau"],
      trim: true,
      unique: true,
      maxlength: [
        25,
        "Le titre d'un tableau ne peut pas exceder 25 characteres",
      ],
    },
    description: {
      type: String,
      maxlength: [
        300,
        "Le titre d'un Tableau ne peut pas exceder 300 characteres",
      ],
    
    },
    tableType: {
      type: String,
      default: "Statique",
    },

      champ1: { type: String },
      champ2: { type: String },
      champ3: { type: String },
      champ4: { type: String },
      champ5: { type: String },
      champ6: { type: String },
    

    link: {
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

StaticTableSchema.virtual("staticLines", {
  ref: "StaticLine",
  localField: "_id",
  foreignField: "staticTable",
  justOne: false,
});


StaticTableSchema.pre('save', function(next) {
  this.link = `${this.tableType}/${this._id}`
  next()
});


module.exports = mongoose.model("StaticTable", StaticTableSchema);
