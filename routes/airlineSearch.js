import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

import searchAirline from "../controllers/searchController.js";

router.get("/:airlineName", asyncHandler(searchAirline));

export default router;
