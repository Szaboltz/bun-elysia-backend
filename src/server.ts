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
  return `The url number ${id}`
}, {
  params: t.Object({
    id: t.Numeric() 
  })
})

app.state('value', 10).get("/state", ({store}) => {
  return store.value // state and store are the state feature of ElysiaJS
})

app.all("/", ({set}) => { // This path route can be get, post, delete or anything 
  const header = set.headers['Content-Type'] = 'Hello everyone'
  const text = Bun.file("src/assets/test.txt")
  return new Response(text)
})

app.onError(({ code }) => { 
  if (code == 'NOT_FOUND') return 'Route not found :('
})

// app.handle(new Request('https://localhost')).then(console.log)

app.listen(SERVER.PORT);

console.log(
  `Server is running at ${SERVER.HOST}:${SERVER.PORT}`
);
