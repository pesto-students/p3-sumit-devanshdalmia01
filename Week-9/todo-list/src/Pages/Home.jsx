import { useState } from "react";
import Logo from "../Assets/logo.svg";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";
export default function Home() {
	const [toggleView, setToggleView] = useState(false);
	const [toDoText, setToDoText] = useState("");
	const [date] = useState(new Date());
	const [tasks] = useState([]);
	const handleChange = (event) => {
		setToDoText(event.target.value);
	};
	const addToDo = (e) => {
		e.preventDefault();
		if (toDoText === "") {
			return alert("Please enter the task! :)");
		} else {
			tasks.push({ id: uuidv4(), isActive: true, text: toDoText });
			setToDoText("");
		}
	};
	console.log(tasks);
	return (
		<>
			<header className="header">
				<img src={Logo} alt="App Logo" height={75} />
			</header>
			<main>
				<section>
					<h1>
						<time dateTime={date.toISOString()}>{date.toLocaleDateString("en-us", { weekday: "long", month: "long", day: "numeric" })}</time>
						{!toggleView ? <p>{tasks.filter((task) => task.isActive === true).length} Active Task</p> : <p>{tasks.filter((task) => task.isActive === false).length} Completed Task</p>}
					</h1>
					<nav>
						<button onClick={() => setToggleView(false)}>Incomplete Tasks</button>
						<button onClick={() => setToggleView(true)}>Completed Tasks</button>
					</nav>
				</section>
				<section>
					<form>
						<fieldset>
							<legend className="invisible">ToDo</legend>
							<label htmlFor="todotext"></label>
							<input type="text" name="todotext" id="todotext" value={toDoText} onChange={handleChange} />
							<button type="submit" onClick={addToDo}>
								Add ToDo
							</button>
						</fieldset>
					</form>
				</section>
				{!toggleView ? (
					<section>
						{tasks.filter((task) => task.isActive === true).length === 0 && tasks.filter((task) => task.isActive === false).length === 0 ? (
							<h1>You currently have 0 tasks added. Add a task to get started!</h1>
						) : tasks.filter((task) => task.isActive === true).length === 0 ? (
							<h1>You currently have 0 active tasks. Add a task now!</h1>
						) : (
							<ol>
								{tasks
									.filter((task) => task.isActive === true)
									.map((task, index) => {
										return <li key={index}>{task.text}</li>;
									})}
							</ol>
						)}
					</section>
				) : (
					<section>
						{tasks.filter((task) => task.isActive === true).length === 0 && tasks.filter((task) => task.isActive === false).length === 0 ? (
							<h1>You currently have 0 tasks added. Add a task to get started!</h1>
						) : tasks.filter((task) => task.isActive === false).length === 0 ? (
							<h1>You currently have 0 completed tasks. Complete a task now!</h1>
						) : (
							<ol>
								{tasks
									.filter((task) => task.isActive === false)
									.map((task, index) => {
										return <li key={index}>{task.text}</li>;
									})}
							</ol>
						)}
					</section>
				)}
			</main>
			<footer>
				<h1>&copy; 2022 Devansh Dalmia | All Rights Reserved</h1>
			</footer>
		</>
	);
}
