import { QueryResult } from 'pg';
import { client } from '..';

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
interface User {
	username: string;
	password: string;
	name: string;
	id: number;
}
export async function createUser(
	username: string,
	password: string,
	name: string
): Promise<User> {
	const values: string[] = [username, password, name];
	const query =
		'INSERT INTO users(username, password, name) VALUES($1,$2,$3) RETURNING *;';
	const result: QueryResult = await client.query(query, values);
	return result.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number): Promise<User> {
	const values: [number] = [userId];
	const query: string = 'SELECT * FROM users WHERE id = $1';
	const result: QueryResult = await client.query(query, values);
	return result.rows[0];
}
