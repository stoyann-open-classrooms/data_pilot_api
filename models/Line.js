const mongoose = require("mongoose");


const LineSchema = new mongoose.Schema(
  {
   
    colone: { 
      type: mongoose.Schema.ObjectId,
      ref: "Colone",
      
    },
    content: {
        type : String
    }
    
  },

  {
     timestamps: true ,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);



module.exports = mongoose.model("Line", LineSchema);
