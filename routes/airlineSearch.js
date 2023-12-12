const express = require("express");
const router = express.Router();

const airlineDataProcessor = require("../airlineDataProcessor.js");
console.log(airlineDataProcessor);

router.get("/:airlineName", (req, res) => {
  airlineDataProcessor("United");
  res.send(`Searched ${req.params.airlineName}`);
});

module.exports = exports = router;
