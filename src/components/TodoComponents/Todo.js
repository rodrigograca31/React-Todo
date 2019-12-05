import React from "react";

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li
				className={this.props.todo.completed ? "done" : ""}
				onClick={e => {
					this.props.complete(this.props.todo);
				}}
			>
				{this.props.todo.task}
			</li>
		);
	}
}

export default Todo;
