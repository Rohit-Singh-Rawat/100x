import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
	const res: User = await prisma.user.create({
		data: {
			username,
			password,
			name,
		},
	});
	return res;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number): Promise<User | null> {
	const res: User | null = await prisma.user.findFirst({
		where: {
			id: userId,
		},
	});
	return res;
}
