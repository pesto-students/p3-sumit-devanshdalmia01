import express from "express";
import { register, logIn, logOut, profile, isAuth } from "../controllers/auth";
import { auth } from "../middlewares/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", logIn);
router.get("/logout", auth, logOut);
router.get("/profile", auth, profile);
router.get("/isauth", auth, isAuth);

export default router;
