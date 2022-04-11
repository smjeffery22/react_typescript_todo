import React from 'react';
import { ITask } from '../Interfaces';

// interface for props is included in each component file
interface Props {
	todoItem: ITask;
}

const TodoTask = ({ todoItem }: Props) => {
	return (
		<div className="task">
			<div className="content">
				<span>{todoItem.task}</span>
				<span>{todoItem.deadline}</span>
			</div>
			<button>X</button>
		</div>
	);
};

export default TodoTask;
