import { useState } from "react";
import Logo from "../Assets/logo.svg";
import "./Home.css";
export default function Home() {
	const [date] = useState(new Date());
	const [activeTasks] = useState();
	return (
		<>
			<header className="header">
				<img src={Logo} alt="App Logo" height={75} />
			</header>
			<main>
				<section>
					<h1>
						<time dateTime={date.toISOString()}>{date.toLocaleDateString("en-us", { weekday: "long", month: "long", day: "numeric" })}</time>
						<p>{activeTasks?.length} Active Task</p>
					</h1>
					<nav>
						<button></button>
						<button></button>
					</nav>
				</section>
				<section>
					<input type="text" name="" id="" />
					<button type="submit"></button>
				</section>
				<section>
					<ol>
						<li></li>
					</ol>
				</section>
			</main>
			<footer>
				<h1>&copy; 2022 Devansh Dalmia | All Rights Reserved</h1>
			</footer>
		</>
	);
}
