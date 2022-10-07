const config = {
	production: {
		SECRET: process.env.SECRET,
		DATABASE: process.env.MONGODB_URI,
	},
	default: {
		SECRET: "mysecretkey",
		DATABASE: "mongodb+srv://devanshdalmia1:a3RyXUm8sLHWuLv7@database1.ltbhusr.mongodb.net/?retryWrites=true&w=majority",
	},
};

export function get(env) {
	return config[env] || config.default;
}
