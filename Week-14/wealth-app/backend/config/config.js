import * as dotenv from "dotenv";

dotenv.config();

const config = {
	production: {
		SECRET: process.env.SECRET,
		DATABASE: process.env.MONGODB_URI,
	},
	default: {
		SECRET: "mysecretkey",
		DATABASE: process.env.MONOGODBURL,
	},
};

export function get(env) {
	return config[env] || config.default;
}
