import React from "react";
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
		console.log("submit");
		this.setState({ formValues: { task: "" } });
		this.props.addtodo(this.state.formValues.task);
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
			<form action="#" onSubmit={this.onFormSubmit}>
				{/* <input
					type="text"
					value={this.state.formValues.task}
					onChange={this.onValueChange}
					name="task"
				/> */}
				<Input
					type="text"
					value={this.state.formValues.task}
					onChange={this.onValueChange}
					name="task"
				></Input>
				{/* <input
					type="button"
					value="Add Todo"
					onClick={e => {
						this.setState({ formValues: { task: "" } });
						this.props.addtodo(this.state.formValues.task);
					}}
				/> */}
				<br />
				<br />
				<Button
					color="success"
					onClick={e => {
						this.setState({ formValues: { task: "" } });
						this.props.addtodo(this.state.formValues.task);
					}}
				>
					Add Todo
				</Button>{" "}
				<Button
					color="success"
					onClick={e => {
						this.props.clear();
					}}
				>
					Clear Completed
				</Button>
				{/* <input
					type="button"
					value="Clear Completed"
					onClick={e => {
						this.props.clear();
					}}
				/> */}
			</form>
		);
	}
}

export default TodoForm;
