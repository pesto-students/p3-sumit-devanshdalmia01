export default function ToDoListItem({ task, setDeleteId, setTaskStatus }) {
	return (
		<>
			<li>
				<button type="button" id={task.id} onClick={() => setTaskStatus(task.id)}>
					Change
				</button>
				<label htmlFor={task.id} onClick={() => setTaskStatus(task.id)}>
					{task.text}
				</label>
				<button type="button" onClick={() => setDeleteId(task.id)}>
					Delete
				</button>
			</li>
		</>
	);
}
