// middleware.ts
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const initPrismaMiddleware = async (c: Context, next: Next) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	c.set("prisma", prisma); // Set Prisma client in context
	await next(); // Continue to the next middleware or route handler
};

export const initJwtMiddleware = async (c: Context, next: Next) => {
	const jwt = c.req.header("Authorization");
	if (!jwt) {
		return c.json({ msg: "Unauthorized" }, 401);
	}
	const token = jwt.split(" ")[1];
	let payload: any;
	try {
		payload = await verify(token, c.env.JWT_SECRET);
	} catch (error: any) {
		return c.json({ msg: error.message }, 401);
	}

	if (!payload) {
		return c.json({ msg: "Invalid token: Unauthorized" }, 401);
	}
	// Correctly set the userId in the context
	c.set("userId", payload.id);
    console.log(payload.id)
	await next();
};
