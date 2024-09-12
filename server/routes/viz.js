import express from "express";
import { getViz } from "../controllers/viz.js";

const router = express.Router();

router.get("/viz", getViz);

export default router;
