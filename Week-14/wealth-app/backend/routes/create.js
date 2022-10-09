import express from "express";
import { createAsset } from "../controllers/create.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/assets/:assetType", auth, createAsset);

export default router;