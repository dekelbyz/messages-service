import { Request, Response, NextFunction } from "express";
import { sendMessageSchema } from "./messages.model";
import { checkIfUserExists } from "../../common/validate";

/**  Checks wether request details are valid and recipient exists. */
export const validateIncomingMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /**
   * Checks wether the request details are valid with our Joi Schema.
   */
  const validationResult = sendMessageSchema.validate(req.body);

  if (validationResult.error) {
    res.status(400).send(validationResult.error.message);
    return;
  }
  /**
   * Making sure that the recipient indeed exists (using our auth micro-service).
   */
  const userExists = await checkIfUserExists(req.body.recipient);
  if (!userExists) {
    res.status(400).send(`recipient '${req.body.recipient}' does not exist.`);
    return;
  }
  next();
};
