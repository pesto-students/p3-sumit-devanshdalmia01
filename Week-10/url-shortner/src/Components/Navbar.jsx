export default function Navbar() {
	return (
		<header className="header">
			{/* <Link to="/">
				<img src={Logo} alt="App Logo" height={60} />
			</Link> */}
			{/* <nav className="navbar navbar-expand-lg d-flex px-5">
				<Link to="/">
					<img className="brandlogo pt-1" alt="ServiceBay Logo" src="images/Brand_Logo.svg" />
				</Link>
				<div className="nav-item justify-content-end d-flex flex-grow-1 pe-5 my-3">
					<Link className="nav-link underlineanimation hvr-icon-grow" to="/">
						<i className="fas fa-home hvr-icon" />
						&nbsp;&nbsp;Home
					</Link>
				</div>
				{isAuthenticated() ? (
					<div className="nav-item dropdown my-3">
						<Link
							to=""
							className="nav-link underlineanimation text-capitalize hvr-icon-grow dropdown-toggle"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i className="fas fa-user-circle hvr-icon" />
							&nbsp;&nbsp;Hi, {cookies?.user?.[0]?.first_name !== "" ? cookies?.user?.[0]?.first_name : cookies?.user?.[0]?.username}
						</Link>
						<ul
							className="dropdown-menu mt-0 pt-3 ms-2 dropdown-menu-end border5px animate slideIn border-0"
							id="mydropdownitem"
							style={{ width: "250px" }}
							aria-labelledby="navbarDropdown"
						>
							<li>
								<Link to="/profile/dashboard" className={location.pathname.includes("/profile/dashboard") ? "dropdown-item active" : "dropdown-item"}>
									<i className="fas fa-chart-bar" />
									&nbsp;&nbsp;Dashboard
								</Link>
							</li>
							<li>
								<Link to="/profile/account" className={location.pathname.includes("/profile/account") ? "dropdown-item active" : "dropdown-item"}>
									<i className="fas fa-id-card" />
									&nbsp;&nbsp;Account
								</Link>
							</li>
							<li>
								<hr className="dropdown-divider dropdowndividernav" />
							</li>
							{!!!cookies?.user?.[0]?.is_social && (
								<>
									<li>
										<Link to="/profile/changepassword" className={location.pathname.includes("/profile/changepassword") ? "dropdown-item active" : "dropdown-item"}>
											<i className="fas fa-lock" />
											&nbsp;&nbsp;Change Password
										</Link>
									</li>
									<li>
										<Link to="/profile/changeemail" className={location.pathname.includes("/profile/changeemail") ? "dropdown-item active" : "dropdown-item"}>
											<i className="fas fa-envelope" />
											&nbsp;&nbsp;Change Email
										</Link>
									</li>
								</>
							)}
							<li>
								<hr className="dropdown-divider dropdowndividernav" />
							</li>
							<li>
								<small className="dropdown-item" onClick={logoutUser2}>
									<i className="fas fa-sign-out-alt" />
									&nbsp;&nbsp;Sign Out
								</small>
							</li>
						</ul>
					</div>
				) : (
					<div className="nav-item my-3">
						<Link className="nav-link mybtnsame" to="/signin">
							Login / Signup
						</Link>
					</div>
				)}
			</nav> */}
		</header>
	);
}
