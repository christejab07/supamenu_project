const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Restaurant", "pub", "hotel", "coffeshop", "other"],
    default: "other",
  },
  representative: {
    type: String,
    required: true,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
  },
  bankAccount: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Client", clientSchema);
