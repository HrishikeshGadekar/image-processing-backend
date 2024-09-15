// src/utils/fileUtils.js
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Function to process the uploaded image
const processImage = async (filePath) => {
  const outputPath = path.join("public", "uploads", path.basename(filePath));
  await sharp(filePath).resize(400, 400).toFile(outputPath);
  return `/uploads/${path.basename(filePath)}`;
};

// Function to adjust the image
const adjustImage = async (
  filePath,
  brightness,
  contrast,
  saturation,
  rotation,
  width,
  height
) => {
  const outputPath = path.join(
    "public",
    "uploads",
    `adjusted-${path.basename(filePath)}`
  );
  await sharp(filePath)
    .resize(parseInt(width), parseInt(height))
    .rotate(parseInt(rotation))
    .modulate({
      brightness: parseFloat(brightness),
      contrast: parseFloat(contrast),
      saturation: parseFloat(saturation),
    })
    .toFile(outputPath);
  return `/uploads/${path.basename(outputPath)}`;
};

module.exports = { processImage, adjustImage };
