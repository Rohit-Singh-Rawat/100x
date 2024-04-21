import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
	title: string;
	description: string | null;
	done: boolean;
	id: number;
	userId: number;
}
export async function createTodo(
	userId: number,
	title: string,
	description: string
): Promise<Todo> {
	const res: Todo = await prisma.todo.create({
		data: {
			userId,
			title,
			description,
		},
	});
	return res;
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
	const res: Todo = await prisma.todo.update({
		where:{
            id:todoId
        }
        , data: {
			done:true
		},
	});
	return res;
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
	const res: Todo[] = await prisma.todo.findMany({
        where:{
            userId:userId
        }
    })
	return res;
}