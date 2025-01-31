const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  relatedFigures: [String],
  image: [String],

  multimedia: [String],

  likes: { type: Number, default: 0 }, // Track the number of likes
  comments: [
    {
      text: { type: String, required: true },
      date: { type: Date, default: Date.now }, // Timestamp for comment
    },
  ],
});

module.exports = mongoose.model("Event", eventSchema);
