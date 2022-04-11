import { useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces';
import './App.css';
import TodoTask from './components/TodoTask';

const App = () => {
	const [task, setTask] = useState<string>('');
	const [deadline, setDeadline] = useState<number>(0);
	const [todo, setTodo] = useState<ITask[]>([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (e.target.name === 'task') {
			setTask(e.target.value);
		} else {
			setDeadline(Number(e.target.value)); // need to convert to number since e.target.value assumes string
		}
	};

	const addTask = (): void => {
		const newTask = { task, deadline };

		setTodo([...todo, newTask]);
		setTask('');
		setDeadline(0);
	};

	const completeTask = (taskToDelete: string): void => {
		setTodo(
			todo.filter((todoItem) => {
				return todoItem.task !== taskToDelete;
			})
		);
	};

	return (
		<div className="App">
			<div className="header">
				<div className="inputContainer">
					<input
						type="text"
						name="task"
						value={task}
						placeholder="Task..."
						onChange={handleChange}
					/>
					<input
						type="number"
						name="deadline"
						value={deadline}
						placeholder="Deadline (in Days)..."
						onChange={handleChange}
					/>
				</div>
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className="todoList">
				{todo.map((todoItem: ITask, key: number) => {
					return (
						<TodoTask
							key={key}
							todoItem={todoItem}
							completeTask={completeTask}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;
