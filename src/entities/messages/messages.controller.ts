import { v4 as uuidv4 } from "uuid";
import * as crud from "../../common/crud";
import { toLowerCaseRemoveSpaces } from "../../common/utils";
import { SendMessageRequest, Message } from "./messages.model";

/* This function takes place as the client makes a post request
to send a new message. */
export function sendMessage(messageRequest: SendMessageRequest) {
  const message: Message = {
    ...messageRequest,
    id: uuidv4(),
    date: new Date(),
  };
  return crud.insert(message, "messages");
}

/* This function takes place as the client makes a get request
to get all of his messages. */
export function getMessages(recipient: string) {
  const messages = crud.getAll("messages");
  const searchTerm = toLowerCaseRemoveSpaces(recipient);

  const result = messages.filter(
    (message) =>
      toLowerCaseRemoveSpaces(message.recipient) == searchTerm ||
      toLowerCaseRemoveSpaces(message.sender) == searchTerm
  );

  if (result.length < 1) throw 404;
  return result;
}
