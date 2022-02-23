import express from "express";
import { applicationRoutes } from "./entities/routes";
import { dbConnect } from "./database";
import { validate } from "./common/validate";
import { config } from "dotenv";
config();

const app = express();

/* middleware functions. */
app.use(express.json());

/** logs our execution time along side endpoints and method type. */
app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`${req.method} ${req.originalUrl} ${Date.now() - start}ms`);
});

/**
 * with every request coming in we must make sure that
 * the user is allowed to gain access to the data
 * he's asking.
 * we do that by sending his JasonWebToken to our
 * AUTHENTICATION MICROSERVICE
 */
app.use(async (req, res, next) => {
  const validUser = await validate(req.headers.authorization!);
  if (validUser.error) {
    return res.status(validUser.error.code).send(validUser.error.message);
  }
  req.user = validUser;
  next();
});

app.use(applicationRoutes);

const PORT = process.env.PORT || 2000;
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}...`);
  });
});
