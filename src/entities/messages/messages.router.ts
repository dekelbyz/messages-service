import { Router, Request, Response, NextFunction } from "express";
import * as controller from "./messages.controller";
import { validateIncomingMessageBySchema } from "./messages.schema";
export const messagesRouter = Router();

/* a middleware function that takes places every time the client
  requests to send a message. */
const validateMessage = (req: Request, res: Response, next: NextFunction) => {
  validateIncomingMessageBySchema(req.body);
  next();
};

messagesRouter.post("/send", validateMessage, (req: Request, res: Response) => {
  res.send(controller.sendMessage(req.body));
});

messagesRouter.get("/get/:recipient", (req: Request, res: Response) => {
  res.send(controller.getMessages(req.params.recipient));
});
