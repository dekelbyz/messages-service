import { Router } from "express";
import { messagesRouter } from "./messages/messages.router";

/** 'applicationRoutes' represents the different routes in our application.
    Importing all of the different routes into this
    one main route can help making the app scalable 
    and easily maintainable.
    */
export const applicationRoutes: Router = Router();

applicationRoutes.use("/messages", messagesRouter);

/* >>  FUNNY FACT
 *
 * Lots of people actually DONT like this form of route handling.
 * even Ryan Dahl himself, (creator of Node.js) admitted that the whole
 * 'index.js' concept in Node.js is kind of uselss and can cause a lot of mess.

 * I personally never came across one of these mentioned issues and I find this method
 * very convenient.

 * You can find the full lecture on youtube by the title:
 * "10 Things I Regret About Node.js - Ryan Dahl - JSConf EU."
 */
