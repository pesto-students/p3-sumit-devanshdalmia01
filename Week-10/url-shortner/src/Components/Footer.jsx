import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<nav>
				<h1>Need Help</h1>
				<ul>
					<li>
						<Link to="/contactus">Contact Us</Link>
					</li>
					<li>
						<Link to="/feedback">Feedback</Link>
					</li>
				</ul>
			</nav>
			<h1>
				&copy; 2022&nbsp;
				<a href="https://www.linkedin.com/in/devanshdalmia1/" rel="noreferrer" target={"_blank"}>
					Devansh Dalmia
				</a>
				&nbsp;| All Rights Reserved
			</h1>
		</footer>
	);
}
