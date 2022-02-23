import * as controller from "../../../src/entities/messages/messages.controller";
import type { SendMessageDto } from "../../../src/entities/messages/dto/send-message.dto";

const messageRequest: SendMessageDto = {
  recipient: "Neriya Cohen",
  content: "Hey. Just running some tests.",
};

test("Send Message", async () => {
  const message = await controller.sendMessage(messageRequest, "Dekel Bayazi");
  expect(message.sender).toEqual("Dekel Bayazi");
});
