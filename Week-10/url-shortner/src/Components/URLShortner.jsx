export default function URLShortner() {
	return (
		<>
			{/* <div className="container">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center align-items-center">
						<form className="w-100">
							<div className="position-relative d-flex justify-content-start align-items-center mb-4">
								<input
									style={{ height: "54px", width: "100px" }}
									className="input100 bgcolorgreyish w-100 border5px border-0 colorblack"
									type="text"
									placeholder="Enter the URL"
									required
									value={myurl}
									onChange={(e) => {
										setMyurl(e.target.value);
									}}
								/>
								<span className="focus-input100" />
								<span className="symbol-input100 d-flex align-items-center position-absolute colorblack h-100">
									<span>
										<i className="far fa-link" />
									</span>
								</span>
								{isAuthenticated() ? (
									<button onClick={urlCreation} type="submit" className="ms-3 mybtnsame h-100 w-25">
										Short It!
									</button>
								) : (
									<button
										onClick={() => {
											history.push("/signin");
										}}
										type="submit"
										className="ms-3 mybtnsame h-100 w-25"
									>
										Short It!
									</button>
								)}
								<CopyToClipboard options={{ debug: props.debug, message: "" }} text={data?.short_url}>
									<button
										onClick={(e) => {
											e.preventDefault();
											handleNotification("Shortened link has been copied.", "success");
											history.push("/profile/dashboard");
										}}
										ref={autocopy}
										type="submit"
										className="d-none"
									>
										Short It!
									</button>
								</CopyToClipboard>
							</div>
						</form>
					</div>
					<p> Shorten URL - {data?.short_url} </p>
					<p> Hit Count - {data?.hit_count} </p>
				</div>
			</div> */}
		</>
	);
}
