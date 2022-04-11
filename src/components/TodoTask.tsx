import React from 'react';
import { ITask } from '../Interfaces';

// interface for props is included in each component file
interface Props {
	todoItem: ITask;
	completeTask(taskToDelete: string): void;
}

const TodoTask = ({ todoItem, completeTask }: Props) => {
	return (
		<div className="task">
			<div className="content">
				<span>{todoItem.task}</span>
				<span>{todoItem.deadline}</span>
			</div>
			<button onClick={() => completeTask(todoItem.task)}>X</button>
		</div>
	);
};

export default TodoTask;
