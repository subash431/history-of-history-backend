const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Create the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
const connectDB = require("./config/db");
connectDB();

// Import Routes
const eventRoutes = require("./routes/eventRoutes");
const figureRoutes = require("./routes/figureRoutes");
const locationRoutes = require("./routes/locationRoutes");
const authRoutes = require("./routes/authRoutes");

// Use Routes
app.use("/api/events", eventRoutes);
app.use("/api/figures", figureRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/auth", authRoutes);

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
