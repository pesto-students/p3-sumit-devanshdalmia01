import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { get } from "./config/config.js";
import User from "./models/user.js";
import { auth } from "./middlewares/auth.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const db = get(process.env.NODE_ENV);
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
	if (err) console.log(err);
	console.log("database is connected");
});

app.get("/", function (req, res) {
	res.status(200).send(`Welcome to WealthApp!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`app is live at ${PORT}`);
});

app.post("/api/register", function (req, res) {
	const newuser = new User(req.body);
	User.findOne({ email: newuser.email }, function (err, user) {
		if (user) return res.status(400).json({ auth: false, message: "email exits" });
		newuser.setPassword(req.body.password);
		newuser.save((err, doc) => {
			if (err) {
				return res.status(400).json({ success: false, message: err.message });
			}
			res.status(200).json({
				success: true,
				user: doc,
			});
		});
	});
});

app.post("/api/login", function (req, res) {
	let token = req.cookies.auth;
	User.findByToken(token, (err, user) => {
		if (err) return res(err);
		if (user)
			return res.status(400).json({
				error: true,
				message: "You are already logged in",
			});
		else {
			User.findOne({ email: req.body.email }, function (err, user) {
				if (!user) return res.json({ isAuth: false, message: " Auth failed ,email not found" });
				if (!user.validPassword(req.body.password)) {
					return res.status(400).json({
						stat: "error",
						message: "Wrong Password",
					});
				} else {
					user.generateToken((err, user) => {
						if (err) return res.status(400).send(err);
						res.cookie("auth", user.token).json({
							isAuth: true,
							id: user._id,
							email: user.email,
						});
					});
				}
			});
		}
	});
});

app.get("/api/profile", auth, function (req, res) {
	res.json({
		isAuth: true,
		userId: req.user._doc.userId,
		firstName: req.user._doc.firstName,
		lastName: req.user._doc.lastName,
		dob: req.user._doc.dob,
		country: req.user._doc.country,
		email: req.user._doc.email,
	});
});

app.get("/api/logout", auth, function (req, res) {
	req.user.deleteToken(req.token, (err, user) => {
		if (err) return res.status(400).send(err);
		res.sendStatus(200);
	});
});
