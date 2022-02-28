import { Router, Request, Response } from "express";
import * as controller from "./messages.controller";
import { validateIncomingMessage } from "./messages.middleware";
export const messagesRouter = Router();

messagesRouter.post(
  "/send",
  validateIncomingMessage,
  async (req: Request, res: Response) => {
    res.send(await controller.sendMessage(req.body, req.user!.username));
  }
);

messagesRouter.get("/", async (req: Request, res: Response) => {
  res.send(await controller.getAllMessages(req.user!.username));
});
