import { Elysia, t } from "elysia";

import SERVER from "./config";

const app = new Elysia()

app.get("/:id/:name", ({params: {id, name}}) => {
  return `Hello user ${id}, is your name ${name}?`
}, {
  params: t.Object({
    id: t.Numeric(),
    name: t.String()
  })
})

app.get("/user/:id", ({params: {id}}) => {
  return `This is a user number that's passed by url: ${id}`
}, {
  params: t.Object({
    id: t.Numeric() 
  })
})

app.all("/", () => { // This path route can be get, post, delete or anything
  return `Hi`
})

app.onError(({ code }) => { 
  if (code == 'NOT_FOUND') return 'Route not found :('
})

// app.handle(new Request('https://localhost')).then(console.log)

app.listen(SERVER.PORT);

console.log(
  `Server is running at ${SERVER.HOST}:${SERVER.PORT}`
);
