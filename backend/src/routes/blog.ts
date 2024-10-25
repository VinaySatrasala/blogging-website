import { Hono } from "hono";
import { initPrismaMiddleware, initJwtMiddleware } from "../middleware";
import { PrismaClient } from "@prisma/client/extension";
import { Bindings, Variables } from "hono/types";
import { createPostInput, updatePostInput } from "@vinay-npm/common";
export const blogRouter = new Hono<{
	Bindings: Bindings;
	Variables: Variables;
}>();

blogRouter.use("*", initPrismaMiddleware);
// Middleware for JWT authentication
blogRouter.use("*", initJwtMiddleware);

// Blog routes
blogRouter.post("/", async (c) => {	

    // @ts-ignore
	const userId = c.get("userId");
	// @ts-ignore
	const prisma = c.get("prisma");

	// Getting Body
	const body = await c.req.json();
    const {success} = createPostInput.safeParse(body)
    if(!success){
        return c.json({
          msg : "Invalid input...!"
        },403)
    }

	// @ts-ignore
	const res = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			published: body.published,
			authorId: userId,
		},
	});

	return c.json(res); // Return user ID for verification
});

blogRouter.put("/", async (c) => {
	// @ts-ignore
	const userId = c.get("userId");
	// @ts-ignore
	const prisma = c.get("prisma");

    const body = await c.req.json();
    const  {success} = updatePostInput.safeParse(body);
    if(!success){
        return c.json({
          msg : "Invalid input...!"
        },403)
    }
    
    // @ts-ignore
    const res = await prisma.post.update({
        where : {
            id : body.id,
            authorId : body.authorId 
        },
        data : {
            title : body.title,
            content : body.content
        }
    })

    return c.json(res);
});

blogRouter.get("/id/:id", async (c) => {
    // @ts-ignore
	const userId = c.get("userId");
	// @ts-ignore
	const prisma = c.get("prisma");
    const id = c.req.param("id");
    console.log(id)
    // @ts-ignore
    const res = await prisma.post.findUnique({
        where : {
            id : id
        }
    })
	return c.json(res);
});

blogRouter.get("bulk", async (c) => {
    // @ts-ignore
    const prisma = c.get("prisma");
    
    try {
        // @ts-ignore
        const res = await prisma.post.findMany();
        return c.json(res);
    } catch (error) {
        console.error(error);
        return c.json({ msg: 'Error retrieving posts' }, 500);
    }
});

