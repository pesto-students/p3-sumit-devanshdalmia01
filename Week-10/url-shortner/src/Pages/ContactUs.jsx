import Base from "../Base";

export default function ContactUs() {
	return (
		<>
			{/* <Base>
				<section className="section feedback">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6">
								<div className="me-lg-5 mb-3 mb-lg-0">
									<img src="images/SVGs/Contact_Us.svg" className="loginsvg" alt="Contact_Us" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="card bgcolorgreyish border-0 border5px p-4">
									<div className="card-body p-0">
										<h2 className="card-title colorblackish text-center">Get In Touch!</h2>
										<form className="mt-4">
											<CSRFToken />
											<div className="row">
												<div className="col-lg-12">
													<h5 className="colorblackish text-start mb-2 fontsize14">Name</h5>
													<div className="position-relative mb-3">
														<input
															className="input100 w-100 border5px border-0 colorblackish"
															type="text"
															placeholder="Name"
															value={
																isAuthenticated() ? (cookies?.user?.[0]?.first_name.length > 0 ? cookies?.user?.[0]?.first_name : cookies?.user?.[0]?.username) : name
															}
															onChange={(e) => {
																setName(e.target.value);
															}}
															required
															disabled={isAuthenticated() ? true : false}
														/>
														<span className="focus-input100" />
														<span className="symbol-input100 d-flex align-items-center position-absolute colorblackish h-100">
															<span>
																<i className="far fa-user" />
															</span>
														</span>
													</div>
												</div>
												<div className="col-lg-12">
													<h5 className="colorblackish text-start mb-2 fontsize14">Email</h5>
													<div className="position-relative mb-3">
														<input
															className="input100 w-100 border5px border-0 colorblackish"
															type="email"
															placeholder="Email"
															value={isAuthenticated() ? cookies?.user?.[0]?.email : email}
															onChange={(e) => {
																setEmail(e.target.value);
															}}
															required
															disabled={isAuthenticated() ? true : false}
														/>
														<span className="focus-input100" />
														<span className="symbol-input100 d-flex align-items-center position-absolute colorblackish h-100">
															<span>
																<i className="far fa-envelope" />
															</span>
														</span>
													</div>
												</div>
												<div className="col-lg-12">
													<h5 className="colorblackish text-start mb-2 fontsize14">Subject</h5>
													<div className="position-relative mb-3">
														<input
															className="input100 w-100 border5px border-0 colorblackish"
															type="text"
															placeholder="Subject"
															value={subject}
															onChange={(e) => {
																setSubject(e.target.value);
															}}
															required
														/>
														<span className="focus-input100" />
														<span className="symbol-input100 d-flex align-items-center position-absolute colorblackish h-100">
															<span>
																<i className="far fa-envelope-open-text" />
															</span>
														</span>
													</div>
												</div>
												<div className="col-lg-12">
													<h5 className="colorblackish text-start mb-2 fontsize14">Message</h5>
													<div className="position-relative mb-3">
														<textarea
															className="colorblackish bgcolorwhite p-3 border5px border-0 w-100"
															style={{ height: "150px", resize: "none" }}
															placeholder="Message"
															value={message}
															onChange={(e) => {
																setMessage(e.target.value);
															}}
															required
														/>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="d-grid">
														<button
															className="mybtnsame"
															type="submit"
															// onClick={(e) => {
															// 	contact(e);
															// }}
														>
															{loading ? <DataLoader2 loaderSize={15} loaderType="ScaleLoader" loaderColor="#242021" /> : "Send Message"}
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Base> */}
		</>
	);
}
