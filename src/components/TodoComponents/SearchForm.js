import React from "react";
import Todo from "./Todo";
import { Button, Input } from "reactstrap";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formValues: {
				task: ""
			}
		};
	}

	onFormSubmit = event => {
		event.preventDefault();
	};

	onValueChange = event => {
		const { name, value } = event.target;

		this.setState({
			formValues: {
				...this.state.formValues,
				[name]: value
			}
		});
	};

	render() {
		return (
			<>
				<hr />
				<h2>Search:</h2>
				<form action="#" onSubmit={this.onFormSubmit}>
					<Input
						type="text"
						value={this.state.formValues.task}
						onChange={this.onValueChange}
						name="task"
					></Input>
				</form>
				<h2>Results: </h2>
				<ul className="list">
					{this.state.formValues.task &&
						this.props.todos
							.filter(todo => {
								return todo.task.includes(
									this.state.formValues.task
								);
							})
							.map(todo => {
								return (
									<Todo
										todo={todo}
										key={todo.id}
										complete={this.props.complete}
									/>
								);
							})}
				</ul>
			</>
		);
	}
}

export default TodoForm;
