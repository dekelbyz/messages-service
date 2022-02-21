import { Router } from "express";
import { messagesRouter } from "./messages/messages.router";

/* ApplicationRoutes represents the different routes in our application.
    By importing all of the different routes into this
    one main route, we can insure our scalability-capability and
    organize. */
export const applicationRoutes: Router = Router();

applicationRoutes.use("/messages", messagesRouter);
