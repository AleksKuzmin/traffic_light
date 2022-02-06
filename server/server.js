const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.get("/", (req, res) => {
  res.json({ red: "red", green: "green" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
