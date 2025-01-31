const express = require("express");
const {
  getLocations,
  addLocation,
  getLocationById,
  updateLocation,
  deleteLocation,
} = require("../controllers/locationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Routes
router.get("/", getLocations); // Get all locations
router.post("/", addLocation); // Add a new location
router.get("/:id", getLocationById); // Get a specific location by ID
router.put("/:id", updateLocation); // Update a location by ID
router.delete("/:id", deleteLocation); // Delete a location by ID

// Admin Routes (protected by authentication middleware)
// Admin Routes (protected by authentication middleware)
router.post("/", authMiddleware, addLocation); // Add a new location (Admin only)
router.put("/:id", authMiddleware, updateLocation); // Update a location (Admin only)
router.delete("/:id", authMiddleware, deleteLocation); // Delete a location (Admin only)

module.exports = router;
