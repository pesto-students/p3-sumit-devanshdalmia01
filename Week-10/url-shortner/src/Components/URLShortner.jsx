export default function URLShortner() {
	return (
		<section className="text-center mx-40 mb-10">
			<form className="flex justify-between">
				<input className="mr-5 font-medium text-sm rounded-md px-8 py-5 shadow flex-grow" type="text" placeholder="Enter the Long URL" required />
				<button className="ml-5 font-medium text-sm uppercase rounded-md px-8 py-5 tracking-wide text-white buttonBG" type="submit">
					Short It!
				</button>
			</form>
		</section>
	);
}
