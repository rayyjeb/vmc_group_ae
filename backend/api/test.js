const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Test endpoint working!" });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Health check working",
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
