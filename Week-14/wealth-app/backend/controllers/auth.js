import User from "../models/user";

const register = async (req, res) => {
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
};

const logIn = async (req, res) => {
	const token = req.cookies.auth;
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
};

const logOut = (req, res) => {
	req.user.deleteToken(req.token, (err, user) => {
		if (err) return res.status(400).send(err);
		res.sendStatus(200);
	});
};

const profile = (req, res) => {
	res.status(200).json({
		isAuth: true,
		userId: req.user._doc.userId,
		firstName: req.user._doc.firstName,
		lastName: req.user._doc.lastName,
		dob: req.user._doc.dob,
		country: req.user._doc.country,
		email: req.user._doc.email,
	});
};

const isAuth = (req, res) => {
	res.status(200).json({
		success: true,
		message: "user authenticated",
	});
};

export { register, logIn, logOut, profile, isAuth };
