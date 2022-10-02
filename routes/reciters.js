import express from "express";
const router = express.Router();

import * as recitersController from "../controllers/reciters.js";

// list all the availabe recieters
router.get("/", recitersController.getReciters);

// list the reciter's infos recieters
router.get("/:id", recitersController.getReciter);

export default router;
