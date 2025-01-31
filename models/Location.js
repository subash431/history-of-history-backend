const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  historicalSignificance: String,
  coordinates: {
    latitude: Number,
    longitude: Number,
  },
});

module.exports = mongoose.model("Location", locationSchema);
