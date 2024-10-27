import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

const app = new Hono();
app.use('/api/*',cors());
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)
app.get("/",(c)=>{
    return c.text("Welcome vinay's blog app...!😊")
})

// app.post("/api/v1/user/signup",(c)=>{
//   return c.json("hel");
// })

export default app;
