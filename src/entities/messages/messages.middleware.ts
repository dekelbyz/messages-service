import { Request, Response, NextFunction } from "express";
import { sendMessageSchema } from "./messages.model";
import { checkIfUserExists } from "../../common/validate";

/**
 *   Validates:
 *
 * * Request body stractured like we expect (Joi Schema).
 *
 * * User is not sending a message to himself.
 *
 * * Recipient exists.
 */
export const validateIncomingMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.recipient === req.user?.username) {
    return res.status(400).send("You can not send messages to yourself.");
  }

  const validationResult = sendMessageSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.message);
  }

  /* using our auth micro-service .*/
  const userExists = await checkIfUserExists(req.body.recipient);
  if (!userExists) {
    return res
      .status(400)
      .send(`recipient '${req.body.recipient}' does not exist.`);
  }
  next();
};
