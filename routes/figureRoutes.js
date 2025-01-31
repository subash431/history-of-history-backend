const express = require("express");
const {
  getFigures,
  addFigure,
  getFigureById,
  updateFigure,
  deleteFigure,
} = require("../controllers/figureController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Routes
router.get("/", getFigures); // Get all figures
router.post("/", addFigure); // Add a new figure
router.get("/:id", getFigureById); // Get a specific figure by ID
router.put("/:id", updateFigure); // Update a figure by ID
router.delete("/:id", deleteFigure); // Delete a figure by ID

// Admin Routes (protected by authentication middleware)
router.post("/", authMiddleware, addFigure); // Add a new figure (Admin only)
router.put("/:id", authMiddleware, updateFigure); // Update a figure (Admin only)
router.delete("/:id", authMiddleware, deleteFigure); // Delete a figure (Admin only)

module.exports = router;
