import { Router, Request, Response, NextFunction } from "express";
import * as controller from "./messages.controller";
import { sendMessageSchema } from "./messages.schema";
export const messagesRouter = Router();

/** a middleware function that takes places
 * every time the client requests to send a message. */
const validateMessage = (req: Request, res: Response, next: NextFunction) => {
  const validationResult = sendMessageSchema.validate(req.body);
  if (validationResult.error) {
    res.status(400).send("Message request is not valid.");
    return;
  }
  next();
};

messagesRouter.post("/send", validateMessage, (req: Request, res: Response) => {
  res.send(controller.sendMessage(req.body));
});

messagesRouter.get("/", (req: Request, res: Response) => {
  if (typeof req.query.recipient === "string") {
    res.send(controller.getMessages(req.query.recipient));
  } else {
    res.status(400).send("Invalid recipient query.");
  }
});
