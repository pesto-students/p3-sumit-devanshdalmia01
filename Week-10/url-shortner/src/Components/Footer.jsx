import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<h1>
				&copy; 2022&nbsp;
				<a href="https://www.linkedin.com/in/devanshdalmia1/" rel="noreferrer" target={"_blank"}>
					Devansh Dalmia
				</a>
				&nbsp;| All Rights Reserved
			</h1>
			{/* <footer className="backgroundlightblue overflow-hidden" style={{ zIndex: 99999 }}>
				<div className="container">
					<div className="row py-4 pb-md-0">
						<div className="col-md text-md-start text-center px-1">
							<h4 className="my-4 colorblackish text-uppercase">Explore</h4>
							<ul className="list-unstyled">
								<li className="my-2">
									<Link className="footerlinks" to="/aboutus">
										About Us
									</Link>
								</li>
								<li className="my-2">
									<Link className="footerlinks" to="/aboutus#ourteam">
										Our Team
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md text-md-start text-center px-1">
							<h4 className="my-4 colorblackish text-uppercase">Need Help</h4>
							<ul className="list-unstyled">
								<li className="my-2">
									<Link className="footerlinks" to="/contactus">
										Contact Us
									</Link>
								</li>
								<li className="my-2">
									<Link className="footerlinks" to="/policiesandfaqs">
										Policies & FAQs
									</Link>
								</li>
								<li className="my-2">
									<Link className="footerlinks" to="/reportabug">
										Report A Bug
									</Link>
								</li>
								<li className="my-2">
									<Link className="footerlinks" to="/feedback">
										Feedback
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md text-md-start text-center px-1">
							<h4 className="my-4 colorblackish text-uppercase">Subscribe</h4>
							<form action="#">
								<CSRFToken />
								<div className="d-flex justify-content-between mx-3 mx-lg-0">
									<input
										className="input100 fontsize14 px-3 w-100 border5px border-0 colorblack me-2"
										type="email"
										placeholder="Email"
										value={email.toLowerCase()}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<button
										onClick={(e) => {
											subscribe(e);
										}}
										disabled="true"
										className="mybtnsame2"
										type="submit"
									>
										Subscribe
									</button>
								</div>
							</form>
							<p className="mt-3 mb-2 colorwhite fontsize14">WE ACCEPT PAYMENTS FROM</p>
							<ul className="list-unstyled d-flex justify-content-md-start justify-content-center mb-0">
								<li className="hvr-icon-float" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
									<img className="hvr-icon" src="images/Logo/Visa_Logo.svg" width="30px" alt="Visa_Logo" />
								</li>
								<li className="hvr-icon-float" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={100}>
									<img className="ms-2 hvr-icon" src="images/Logo/Mastercard_Logo.svg" width="30px" alt="Mastercard_Logo" />
								</li>
								<li className="hvr-icon-float" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={200}>
									<img className="ms-2 hvr-icon" src="images/Logo/Amex_Logo.svg" width="30px" alt="Amex_Logo" />
								</li>
								<li className="hvr-icon-float" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={300}>
									<img className="ms-2 hvr-icon" src="images/Logo/Maestro_Logo.svg" width="30px" alt="Maestro_Logo" />
								</li>
								<li className="hvr-icon-float" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={400}>
									<img className="ms-2 hvr-icon" src="images/Logo/Rupay_Logo.svg" width="30px" alt="Rupay_Logo" />
								</li>
								<li className="hvr-icon-float" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={500}>
									<img className="ms-2 hvr-icon" src="images/Logo/UPI_Logo_Small.svg" width="30px" alt="UPI_Logo_Small" />
								</li>
							</ul>
						</div>
					</div>
					<div className="row pb-2">
						<div className="col text-center">
							<p className="m-0 colorblackish">
								© 2021 ServiceBay | All Rights Reserved | Made With <i className="fas notaccepted fa-heart" /> in India
							</p>
						</div>
					</div>
				</div>
			</footer> */}
		</footer>
	);
}
