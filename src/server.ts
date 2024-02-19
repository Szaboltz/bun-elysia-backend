import { Elysia, t } from "elysia";

import SERVER from "./config";

const app = new Elysia()

app.get("/:id", ({params: {id}}) => {
  return `This is a number that's passed by url: ${id}`
}, {
  params: t.Object({
    id: t.Numeric()
  })
})

app.get("/user/:id", ({params: {id}}) => {
  return `This is a user number that's passed by url: ${id}`
}, {
  params: t.Object({
    id: t.Numeric()
  })
})

// app.handle(new Request('https://localhost')).then(console.log)

app.listen(SERVER.PORT);

console.log(
  `Server is running at ${SERVER.HOST}:${SERVER.PORT}`
);
