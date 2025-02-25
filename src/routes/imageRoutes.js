const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");

router.post("/upload", imageController.uploadImage);
router.post("/adjust", imageController.adjustImage);

module.exports = router;
