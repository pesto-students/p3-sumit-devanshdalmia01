import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const dataSlice = createSlice({
	name: "data",
	initialState: {},
	reducers: {
		addURL(state, action) {
			state[uuidv4()] = action.payload;
		},
		deleteURL(state, action) {
			delete state[action.payload];
		},
		updateURLStats(state, action) {},
	},
});

export const { addURL, deleteURL, updateURLStats } = dataSlice.actions;

export default dataSlice.reducer;
