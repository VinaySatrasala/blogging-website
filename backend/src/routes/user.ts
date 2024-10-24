import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { initPrismaMiddleware } from "../middleware";
import { Bindings , Variables } from "../types";



export const userRouter = new Hono<{ Bindings: Bindings; Variables: Variables }>();

// Middleware to initialize Prisma Client
userRouter.use('*', initPrismaMiddleware);

// Sign-up route
userRouter.post('/signup', async (c) => {
  const prisma = c.get('prisma');
  const body = await c.req.json();

  let uid: any;
  try {
    uid = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,  // Directly store the password without hashing
      },
      select: {
        id: true,
      },
    });
  } catch (error: any) {
    console.log(error.message);
    return c.json({ msg: error.message }, 500); // Return 500 for server errors
  }

  const token = await sign({ id: uid.id }, c.env.JWT_SECRET);

  return c.json({ token });
});

// Sign-in route
userRouter.post('/signin', async (c) => {
  const prisma = c.get('prisma');
  const body = await c.req.json();

  if (!body.email || !body.password) {
    return c.json({ msg: 'Email and password required' }, 400);
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return c.json({ msg: 'User does not exist' }, 404);
  }

  // Compare the plain password without hashing
  if (body.password !== user.password) {
    return c.json({ msg: 'Invalid password' }, 401);
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ token });
});
