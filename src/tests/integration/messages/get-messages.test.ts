import { app } from "../../../app";
import request from "supertest";
const accessToken = process.env.TEST_ACCESS_TOKEN;

describe("GET /messages", function () {
  it("Gets all messages", async function () {
    await request(app)
      .get("/messages")
      .set("authorization", `Bearer ${accessToken}`)
      .expect(200);
  });
});
