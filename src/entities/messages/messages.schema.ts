import Joi from "joi";
import { SendMessageRequest } from "./messages.model";

/**
 * Here we are using the Joi npm-package in order to
 * validate the data we get by http-requests.

 * We use Schemas to represent the stracture of the data that we're expecting
 * to receive.

 * >> IT ALSO INCLUDES ERROR HANDLING << */

const sendMessageSchema = Joi.object({
  sender: Joi.string().alphanum().min(3).max(20).required(),
  recipient: Joi.string().alphanum().min(3).max(20).required(),
  content: Joi.string().min(1).max(255).required(),
});

export function validateIncomingMessageBySchema(
  messageRequest: SendMessageRequest
) {
  try {
    sendMessageSchema.validate(messageRequest);
  } catch {
    throw 401;
  }
}
