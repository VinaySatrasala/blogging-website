import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.post("/api/v1/signup",(c)=>{
  return c.text("signup")
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
