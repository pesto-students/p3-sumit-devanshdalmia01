import { useDispatch } from "react-redux";
import { addURL } from "../redux/storingData";
import { createShortURL, getShortURLStats, getQRCode } from "../Utils/url";
import { toast } from "react-toastify";
import { useState } from "react";

export default function URLShortner() {
	const [loading, setLoading] = useState(false);
	const [values, setValues] = useState({
		longURLInput: "",
		codeInput: "",
	});
	const { longURLInput, codeInput } = values;
	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};
	const dispatch = useDispatch();
	const addLink = (e, longURL, code) => {
		e.preventDefault();
		if (longURL) {
			let tempData = {};
			createShortURL(longURL, code)
				.then((res) => {
					tempData["url"] = {
						title: res.url.title,
						longURL: res.url.fullLink,
						shortURL: res.url.shortLink,
						code: code,
					};
					getShortURLStats(res.url.shortLink)
						.then((resp) => {
							tempData["stats"] = resp.stats;
							getQRCode(res.url.shortLink)
								.then((respo) => {
									tempData["qrCode"] = respo;
									dispatch(addURL(tempData));
									setValues({
										longURLInput: "",
										codeInput: "",
									});
									setLoading(false);
									toast.success("Short URL successfully created!");
								})
								.catch((err) => {
									toast.error("Error inside getQRCode!");
									console.log(err);
								});
						})
						.catch((err) => {
							toast.error("Error inside getShortURLStats!");
							console.log(err);
						});
				})
				.catch((err) => {
					toast.error("Error inside createShortURL!");
					console.log(err);
				});
		} else {
			return toast.error("Long URL empty!");
		}
	};
	return (
		<section className="text-center mx-40 mb-10">
			<form className="flex justify-between">
				<input
					className="mr-5 font-medium text-sm rounded-md px-8 py-5 shadow flex-grow"
					type="text"
					placeholder="Enter the Long URL"
					required
					name="longURLInput"
					value={longURLInput}
					onChange={handleChange("longURLInput")}
				/>
				<input
					className="mr-5 font-medium text-sm rounded-md px-8 py-5 shadow"
					type="text"
					placeholder="Enter the custom code"
					required
					name="codeInput"
					value={codeInput}
					onChange={handleChange("codeInput")}
				/>
				<button
					onClick={(e) => {
						addLink(e, longURLInput, codeInput);
						setLoading(true);
					}}
					className="ml-5 font-medium text-sm uppercase rounded-md px-8 py-5 tracking-wide text-white buttonBG"
					type="submit"
				>
					{!loading ? "Short It!" : "Loading!"}
				</button>
			</form>
		</section>
	);
}
