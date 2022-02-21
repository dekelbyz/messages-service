import express, { Request, Response } from "express";
import { date } from "joi";
import { applicationRoutes } from "./entities/routes";

const app = express();

/* middleware functions. */
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`${req.method} ${req.originalUrl} ${Date.now() - start}ms`);
});

app.get("/is-alive", (req: Request, res: Response) => {
  res.send("I am alive");
});

app.use(applicationRoutes);

const PORT: number | string = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}...`);
});
