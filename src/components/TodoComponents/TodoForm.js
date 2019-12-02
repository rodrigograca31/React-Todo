import React from "react";

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
				<input
					type="text"
					value={this.state.formValues.task}
					onChange={this.onValueChange}
					name="task"
				/>
				<input
					type="button"
					value="Add Todo"
					onClick={e => {
						this.setState({ formValues: { task: "" } });
						this.props.addtodo(this.state.formValues.task);
					}}
				/>
				<input
					type="button"
					value="Clear Completed"
					onClick={e => {
						this.props.clear();
					}}
				/>
			</form>
		);
	}
}

export default TodoForm;
