import express from "express";
import { readAsset } from "../controllers/read.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/assets/:assetType", auth, readAsset);

export default router;
