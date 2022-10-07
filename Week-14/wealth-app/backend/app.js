import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
// app.use("/api/create", createRoutes);
// app.use("/api/read", readRoutes);
// app.use("/api/update", updateRoutes);
// app.use("/api/delete", deleteRoutes);

export default app;
