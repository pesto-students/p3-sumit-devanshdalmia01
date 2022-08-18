import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";

export default function Navbar() {
	return (
		<header>
			<Link to="/">
				<img src={Logo} alt="App Logo" height={45} />
			</Link>
			<nav>
				<ul>
					<li>
						<button>Show Info</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
