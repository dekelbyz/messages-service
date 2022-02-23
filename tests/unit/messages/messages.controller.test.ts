import { sendMessage } from "../../../src/entities/messages/messages.controller";
import type { SendMessageDto } from "../../../src/entities/messages/dto/send-message.dto";

const messageRequest: SendMessageDto = {
  recipient: "NeriyaCo",
  content: "Hey. Just running some tests.",
};

test("this is a test", async () => {
  const result = await sendMessage(messageRequest, "Dekel12345");
  expect(result.sender).toEqual("Dekel12345");
});
