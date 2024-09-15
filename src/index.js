// src/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const imageRoutes = require("./controllers/imageController");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", imageRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
