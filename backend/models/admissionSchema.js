const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const admissionDocument = new Schema({
  admissionDate: {
    type: Date,
    required: [true, "admission date is needed"],
  },

  dischargeDate : {
    type: Date,
    required: [true, "discharge date is needed"],
  },

  diagnosis: {
    type: String,
    required: [true, "diagnosis is required"],
  }

  
});

const Admission = mongoose.model("Admission", admissionDocument);
module.exports = Admission;
