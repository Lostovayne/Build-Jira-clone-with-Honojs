import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello World" });
});

export const GET = handle(app);
