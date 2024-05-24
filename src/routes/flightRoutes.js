import express from "express";
import {
  searchFlight,
  getFlightById,
  getAllFlights,
  createFlights,
} from "../controllers/flightController.js";

const router = express.Router();

router.get("/search", searchFlight);

router.get("/", getAllFlights);

router.get("/:id", getFlightById);

router.post("/create", createFlights);

export default router;
