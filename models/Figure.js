const mongoose = require("mongoose");

const figureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthDate: Date,
  deathDate: Date,
  biography: String,
  notableEvents: [String],
});

module.exports = mongoose.model("Figure", figureSchema);
