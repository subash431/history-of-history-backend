const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Admin login
router.post("/login", authController.login);

// Add a new admin
router.post("/add", authController.addAdmin);

// Update an admin
router.put("/update/:id", authController.updateAdmin);

// Delete an admin
router.delete("/delete/:id", authController.deleteAdmin);

router.get("/all", authController.getAllAdmins);

module.exports = router;
