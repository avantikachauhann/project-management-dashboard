import express from "express";
import {
  getCases,
  getDepartments,
  getStartups,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/cases", getCases);
router.get("/departments", getDepartments);
router.get("/startups", getStartups);
router.get("/geography", getGeography);

export default router;
