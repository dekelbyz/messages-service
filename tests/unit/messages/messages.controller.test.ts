import * as controller from "../../../src/entities/messages/messages.controller";
import { SendMessageDto } from "../../../src/entities/messages/dto/send-message.dto";
import { dbConnect } from "../../../src/database";

const messageBody: SendMessageDto = {
  recipient: "Testing",
  content: "Dev test",
};

describe("Send Message", () => {
  (function () {
    dbConnect();
  })();
  test("Valid Send Message Request", async () => {
    const request = await controller.sendMessage(messageBody, "Dekel");

    const expectedResult = {
      sender: "Dekel",
      recipient: "Testing",
      content: "Dev test",
    };
    const departedData = {
      sender: request.sender,
      recipient: request.recipient,
      content: request.content,
    };
    expect(expectedResult).toMatchObject(departedData);
  });
});
