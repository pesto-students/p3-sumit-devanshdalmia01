import express from "express";
import { readAsset, readExpense } from "../controllers/read.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/assets/:assetType", auth, readAsset);
router.get("/expenses", auth, readExpense);

export default router;
