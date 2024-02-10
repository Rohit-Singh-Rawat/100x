import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [id, setId] = useState(0);
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState({
		id: id,
		title: '',
		description: '',
		completed: false,

	});
	function deleteTodo(id){
		setTodos([...todos.filter((t) => t.id != id)]);
	}
	
	function todoCompleted(e){
		const td = JSON.parse(JSON.stringify(todos));
		td.forEach((t) => (t.id === e ? (t.completed = !t.completed) : '')),
		setTodos([...td]);

	}
	function changeValue(e) {
		setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
	}
	function addTodo() {
		if (newTodo.title.trim() === '' || newTodo.description.trim() === '') {
			alert('Please fill in both title and description fields');
			return;
		}
		setTodos((todos) => {
			return [...todos, newTodo];
		});
		
		setNewTodo((newTodo) => ({
			...newTodo,
			id: id + 1
		}));

		setId(id + 1);	
	}

	return (
		<>
			<h2>My Todos</h2>
			<div className='todoBar'>
				<div>
					<input
						placeholder='title'
						name='title'
						onChange={(e) => changeValue(e)}
					></input>
					<input
						placeholder='description'
						name='description'
						onChange={(e) => changeValue(e)}
					></input>
				</div>

				<button onClick={addTodo}>Add Todo</button>
			</div>

			<div id='container'>
				{todos.map((todo) => {
					return (
						<div
							key={todo.id}
							className='todo'
						>
							<div  className='header'>
								<div
									className='todoTitle'
									style={{
										textDecoration: todo.completed ? 'line-through' : 'none',
										color: todo.completed ? '#757676' : '',
									}}
								>
									{todo.title}
								</div>
								<div
									className='todoDescription'
									style={{
										textDecoration: todo.completed ? 'line-through' : 'none',
										color: todo.completed ? '#757676' : '',
									}}
								>
									{todo.description}
								</div>
							</div>

							<div className='btns'>
								<button
									className='completeBtn'
									style={{
										display: todo.completed ? 'none' : '',
									}}
									onClick={() => todoCompleted(todo.id)}
								>
									Completed
								</button>
								<button
									className='deleteBtn'
									onClick={() => deleteTodo(todo.id)}
								>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
