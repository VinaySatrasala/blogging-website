import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';



const app = new Hono();

app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)
app.get("/",(c)=>{
    return c.text("Welcome vinay's blog app...!😊")
})

// app.post("/api/v1/user/signup",(c)=>{
//   return c.json("hel");
// })

export default app;
