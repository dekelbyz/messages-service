import express, { Request, Response } from "express";
import { applicationRoutes } from "./entities/routes";

const app = express();

/* middleware functions. */
app.use(express.json());
app.use(applicationRoutes);

app.get("/is-alive", (req: Request, res: Response) => {
  res.send("I am alive");
});

const PORT: number | string = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}...`);
});
