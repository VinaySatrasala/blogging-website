import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

type bindings = {
  DATABASE_URL :string
}

const app = new Hono<{Bindings:bindings}>();


// app.get('/', (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl : c.env.DATABASE_URL
//   }).$extends(withAccelerate());
//   return c.text('Hello Hono!')
// })


app.post("/api/v1/signup",async (c)=>{

  // Prisma client
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  // Getting body from req
  const body = await c.req.json();

  // Pushing it to DB
  let uid:any;
  try{
    uid = await prisma.user.create({
      data:{
        email : body.email,
        name : body.name,
        password : body.password,
      },
      select:{
        id:true
      }
    })
  }catch(error:any){
    console.log(error.message);
    return c.json({msg : error.message});
  }

  return c.json(`User created succesfully with UID: ${uid.id}`);
})

app.post("/api/vi/signin",(c)=>{
  return c.text("signin")
})

app.post("/api/v1/blog",(c)=>{
  return c.text("/api/v1/blog")
})

app.put("/api/v1/blog",(c)=>{
  return c.text("/api/v1/blog")
})

app.get("/api/v1/blog/:id",(c)=>{
  return c.text("/api/v1/blog/:id")
})

app.get("/api/v1/blog/bulk",(c)=>{
  return c.text("/api/v1/blog/bulk")
})



export default app
