import express from "express";
const router = express.Router();

import airlineDataProcessor from "../airlineDataProcessor.js";

router.get("/:airlineName", (req, res) => {
  const result = airlineDataProcessor.searchAirline(req.params.airlineName);
  console.log("result", result);
  res.send(`Searched ${req.params.airlineName}`);
});

export default router;
