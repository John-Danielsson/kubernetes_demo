// Run this code with:
// node server.js
// http://localhost:3000/

const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
