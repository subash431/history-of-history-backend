const express = require("express");
const {
  getEvents,
  addEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  addLike,
  removeLike,
  addComment,
} = require("../controllers/eventController");

const router = express.Router();

// Routes
router.get("/", getEvents);
router.post("/", addEvent); // Add a new event
router.get("/:id", getEventById); // Get an event by ID
router.put("/:id", updateEvent); // Update event by ID
router.delete("/:id", deleteEvent); // Delete event by ID

// Like/Remove likes
router.post("/:eventId/like", addLike); // Add like
router.delete("/:eventId/like", removeLike); // Remove like

// Comment on event
router.post("/:eventId/comment", addComment); // Add a comment

module.exports = router;
