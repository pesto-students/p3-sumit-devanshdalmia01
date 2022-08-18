import { useSelector, useDispatch } from "react-redux";
import { addURL } from "../redux/storingData";
// import { toast } from "react-toastify";

export default function URLShortner() {
	const data = useSelector((state) => state);
	const dispatch = useDispatch();
	const addLink = (e, longURL) => {
		e.preventDefault();
		const tempData = {
			url: {
				title: "",
				longURL: longURL,
				shortURL: "",
				code: "",
			},
			stats: {
				clicks: "",
				facebook: "",
				twitter: "",
				pinterest: "",
				instagram: "",
				googlePlus: "",
				linkedin: "",
				rest: "",
				devices: {
					geo: {
						0: {
							tag: "IN",
							clicks: "4",
						},
					},
					dev: {
						0: {
							tag: "Desktop",
							clicks: "3",
						},
						1: {
							tag: "Mobile",
							clicks: "1",
						},
					},
					sys: {
						0: {
							tag: "Mac 10.15",
							clicks: "3",
						},
						1: {
							tag: "Android 11",
							clicks: "1",
						},
					},
					bro: {
						0: {
							tag: "Safari 15.6",
							clicks: "2",
						},
						1: {
							tag: "Chrome Mobile 104.0",
							clicks: "1",
						},
						2: {
							tag: "Chrome 104.0",
							clicks: "1",
						},
					},
					brand: {
						0: {
							family: "Other",
							tag: "Other",
							clicks: "1",
						},
						1: {
							family: "Apple",
							tag: "Other",
							clicks: "3",
						},
					},
					lang: {
						0: {
							tag: "EN",
							clicks: "4",
						},
					},
				},
				refs: {},
				bots: "Insufficient subscription level",
			},
			qrCode: "",
		};
		dispatch(addURL(tempData));
	};
	console.log(data, "kkk");
	return (
		<section className="text-center mx-40 mb-10">
			<form className="flex justify-between">
				<input className="mr-5 font-medium text-sm rounded-md px-8 py-5 shadow flex-grow" type="text" placeholder="Enter the Long URL" required />
				<button onClick={(e) => addLink(e, "https://www.google.co.in")} className="ml-5 font-medium text-sm uppercase rounded-md px-8 py-5 tracking-wide text-white buttonBG" type="submit">
					Short It!
				</button>
			</form>
		</section>
	);
}
