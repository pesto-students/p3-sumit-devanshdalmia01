import User from "../models/user.js";

const auth = (req, res, next) => {
	const token = req.cookies.auth;
	User.findByToken(token, (err, user) => {
		if (err) throw err;
		if (!user)
			return res.json({
				error: true,
			});
		req.token = token;
		req.user = user;
		next();
	});
};

export { auth };
