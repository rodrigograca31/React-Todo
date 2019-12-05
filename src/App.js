import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/TodoComponents/SearchForm";
import "./components/TodoComponents/Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor(props) {
		super(props);

		console.log();

		this.state = {
			// todos: [
			// 	// {
			// 	// task: "",
			// 	// id: 0,
			// 	// completed: false
			// 	// }
			// 	{
			// 		task: "Organize Garage",
			// 		id: 1528817077286,
			// 		completed: false
			// 	},
			// 	{
			// 		task: "Bake Cookies",
			// 		id: 1528817084358,
			// 		completed: false
			// 	},
			// 	{
			// 		task: "Go to Mars",
			// 		id: Date.now(),
			// 		completed: false
			// 	}
			// ]
			todos: JSON.parse(window.localStorage.getItem("todos")) || []
		};
	}

	addtodo = task => {
		console.log(task);

		// this.setState(oldState => ({
		// 	todos: []
		// }));
		const newTask = {
			task: task,
			id: Date.now(),
			completed: false
		};

		// this.setState(oldState => {
		// 	oldState.todos.push(newTask);
		// 	return {
		// 		...oldState
		// 	};
		// });
		this.setState(oldState => {
			window.localStorage.setItem(
				"todos",
				JSON.stringify([...oldState.todos, newTask])
			);
			return { todos: [...oldState.todos, newTask] };
		});
	};

	complete = todo => {
		console.log("COMPLETED");
		this.setState(oldState => ({
			todos: [
				...oldState.todos.map((el, index) => {
					if (el.id == todo.id) {
						// el = todo;
						el.completed = true;
					}
					return el;
				})
			]
		}));
	};

	clear = () => {
		console.log("clear");
		this.setState(oldState => ({
			todos: [
				...oldState.todos.filter((el, index) => {
					if (el.completed === false) {
						return el;
					}
				})
			]
		}));
	};

	render() {
		return (
			<div className="app">
				<h2>Welcome to your Todo App!</h2>
				<TodoList todos={this.state.todos} complete={this.complete} />
				<TodoForm addtodo={this.addtodo} clear={this.clear} />
				<SearchForm todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
