import { app } from "../../../app";
import request from "supertest";
import type { SendMessageDto } from "../../../entities/messages/dto/send-message.dto";

const accessToken = process.env.TEST_ACCESS_TOKEN;
const invalidRequestString = "I am sending an invalid message request :(";
const validRequestString = "I am sending a valid message request :)";

/* Setting up dummy users.
  Using our dummy users we will be able
  to test our integration as it is without 
  changing any development code.

  (une user to send messages and the other one
    to receive those messages)
*/
const SENDER = "TestUser1";
const RECIPIENT = "TestUser2";

/* logging in our application in order to receive an access_token 
   and make HTTP requests. */

/* Testing valid requests. */
describe("POST /messages/send", function () {
  it("Sends a valid message", async function () {
    /*Performing a valid 'sendMessage' request */
    const messageBody: SendMessageDto = {
      recipient: RECIPIENT,
      content: validRequestString,
    };

    const excpectedOutput = {
      sender: SENDER,
      recipient: RECIPIENT,
      content: validRequestString,
    };

    const res = await request(app)
      .post("/messages/send")
      .set("authorization", `Bearer ${accessToken}`)
      .send(messageBody)
      .expect(200);

    const { _id, __v, date, ...responseBody } = res.body;
    expect(responseBody).toEqual(excpectedOutput);
  });
});

/* Testing error handling in our application. */
describe("/POST messages/send (ERRORS)", function () {
  it("Sends a message to an unexisting user", async function () {
    /* Sending a message to an un-existing user, we expect error */

    const recipient = "I don't exist!";
    const messageBody: SendMessageDto = {
      recipient,
      content: invalidRequestString,
    };

    const res = await request(app)
      .post("/messages/send")
      .set("authorization", `Bearer ${accessToken}`)
      .send(messageBody)
      .expect(400);
    expect(res.text).toBe("recipient 'I don't exist!' does not exist.");
  });

  it("Sends a message to the sender himself", async function () {
    const messageBody: SendMessageDto = {
      recipient: SENDER,
      content: invalidRequestString,
    };

    const res = await request(app)
      .post("/messages/send")
      .set("authorization", `Bearer ${accessToken}`)
      .send(messageBody)
      .expect(400);
    expect(res.text).toBe("You can not send messages to yourself.");
  });

  it("Sends a message without access token", async function () {
    const messageBody: SendMessageDto = {
      recipient: RECIPIENT,
      content: invalidRequestString,
    };

    /* Missing Bearer token on purpose. */
    const res = await request(app)
      .post("/messages/send")
      .send(messageBody)
      .expect(400);
    expect(res.text).toBe("Please provide an Authorization token.");
  });

  it("Sends a message an unvalid access token", async function () {
    const messageBody: SendMessageDto = {
      recipient: RECIPIENT,
      content: "I am sending invalid message request :(",
    };

    await request(app)
      .post("/messages/send")
      .set("authorization", `Bearer UNVALIDTOKEN`)
      .send(messageBody)
      .expect(401);
  });

  it("Sends a message with an unwanted field", async function () {
    const messageBody = {
      recipient: RECIPIENT,
      content: invalidRequestString,
      unWantedField: "Im not very welcomed here so..",
    };

    const res = await request(app)
      .post("/messages/send")
      .set("authorization", `Bearer ${accessToken}`)
      .send(messageBody)
      .expect(400);
    expect(res.text).toBe('"unWantedField" is not allowed');
  });

  it("Sends a message without content", async function () {
    const messageBody: Partial<SendMessageDto> = {
      recipient: RECIPIENT,
    };

    const res = await request(app)
      .post("/messages/send")
      .set("authorization", `Bearer ${accessToken}`)
      .send(messageBody)
      .expect(400);
    expect(res.text).toBe('"content" is required');
  });
});
