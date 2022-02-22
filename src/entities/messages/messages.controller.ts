import type { ReceiveMessages, SendMessageRequest } from "./messages.model";
import { MessageModel } from "./messages.model";

export async function sendMessage(
  messageRequest: SendMessageRequest,
  username: string
) {
  const message = {
    ...messageRequest,
    date: new Date(),
    sender: username,
  };

  const doc = new MessageModel(message);
  await doc.save();
  return doc;
}

export async function getAllMessages(
  username: string
): Promise<ReceiveMessages> {
  const messages = await MessageModel.find({ recipient: username });
  return {
    recipient: username,
    messages,
  };
}
