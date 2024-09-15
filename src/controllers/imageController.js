// src/controllers/imageController.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const { processImage, adjustImage } = require("../utils/fileUtils");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload endpoint
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { path: filePath } = req.file;
    const previewUrl = await processImage(filePath);
    res.json({ previewUrl });
  } catch (error) {
    res.status(500).json({ error: "Error processing image" });
  }
});

// Adjust endpoint
router.post("/adjust", upload.single("image"), async (req, res) => {
  try {
    const { brightness, contrast, saturation, rotation, width, height } =
      req.body;
    const { path: filePath } = req.file;

    // Adjust image
    const adjustedImagePath = await adjustImage(
      filePath,
      brightness,
      contrast,
      saturation,
      rotation,
      width,
      height
    );

    // Send back the URL to the adjusted image
    res.json({ previewUrl: adjustedImagePath });
  } catch (error) {
    res.status(500).json({ error: "Error adjusting image" });
  }
});

module.exports = router;
