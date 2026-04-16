const express = require("express");
const app = express();

const PORT = 3001;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/orders", (req, res) => {
  res.json([
    { id: 1, item: "Laptop" },
    { id: 2, item: "Keyboard" }
  ]);
});

app.listen(PORT, () => console.log("API running"));