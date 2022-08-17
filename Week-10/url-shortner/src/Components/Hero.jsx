export default function Hero() {
	return (
		<section className="section align-items-center d-flex pt-0" style={{ height: "50vh", width: "100%" }}>
			<div className="container">
				<div className="row text-center">
					<div className="col-lg-7 align-items-center ps-5 d-flex justify-content-start">
						<img src="images/Tag_Line.svg" width="700px" className="loginsvg" alt="Tag_line" />
					</div>
					<div className="col-lg-5 pe-4 align-items-end d-flex">
						<div className="row d-flex flex-grow-1 justify-content-center">
							{/* <Link to="/signin" className="mybtnsame1 w-50">
								Get Started
							</Link> */}
						</div>
						<div className="row d-flex justify-content-center">
							<a href="" rel="noopener noreferrer" target="_blank" className="mybtnsame1 w-50">
								Download App
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
