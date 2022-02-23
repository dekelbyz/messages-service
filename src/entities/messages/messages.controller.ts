import type { SendMessageDto } from "./dto/send-message.dto";
import type { GetMessagesDto } from "./dto/get-messages.dto";
import { Message, MessageModel } from "./messages.model";

export async function sendMessage(
  messageRequest: SendMessageDto,
  username: string
): Promise<Message> {
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
): Promise<GetMessagesDto> {
  const messages = await MessageModel.find({ recipient: username });
  return {
    recipient: username,
    messages,
  };
}
