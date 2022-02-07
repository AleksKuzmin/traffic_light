const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
let northSouthBound = true;
const lightsStatus = (req, res) => {
  let response = {};

  if (northSouthBound) {
    response.NS = "green";
    response.WE = "red";
  } else {
    response.NS = "red";
    response.WE = "green";
  }
  res.json(response);
};
app.get("/status", lightsStatus);

app.put("/changeLights", (req, res) => {
  northSouthBound = !northSouthBound;
  lightsStatus(req, res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
