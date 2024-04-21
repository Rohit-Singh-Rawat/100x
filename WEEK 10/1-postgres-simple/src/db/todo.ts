import { QueryResult } from 'pg';
import { client } from '..';
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
interface Todo {
	id: number;
	user_id: number;
	title: string;
	description: string;
	done: boolean;
}

export async function createTodo(
	userId: number,
	title: string,
	description: string
): Promise<Todo> {
	const values: [number, string, string] = [userId, title, description];
	const query =
		'INSERT INTO todos(user_id, title, description) VALUES($1,$2,$3) RETURNING *;';
	const result = await client.query(query, values);
	const todo: Todo = result.rows[0];
	return todo;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo> {
	const values: [number] = [todoId];
	const query = 'UPDATE todos SET done=true WHERE id= $1 RETURNING *;';
	const result = await client.query(query, values);
	const todo: Todo = result.rows[0];
	return todo;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number): Promise<Todo[]> {
	const values: [number] = [userId];
	const query = 'SELECT * FROM todos WHERE user_id = $1';
	const result: QueryResult<Todo> = await client.query(query, values);
	const todos: Todo[] = result.rows;
	return todos;
}
