import axios from "axios";
import { checkIfUserExists } from "../common/validate";

/*
 * In order to run integration tests, we will be have
 * to use EXISTING users.
 *
 * This file is in charge of creating test users
 * (as long as they aren't exist already).
 *
 * We will than log-in to them in order to
 * receive an access_token and test our endpoints.
 */
async function login() {
  try {
    const response = await axios({
      method: "post",
      url: process.env.AUTH_SERVICE + "/auth/login",
      data: {
        username: "TestUser1",
        password: "123456",
      },
    });
    return response.data.access_token;
  } catch (e: any) {
    return {
      error: {
        code: e.response.status,
        message: e.response.statusText,
      },
    };
  }
}

async function register(username: string) {
  try {
    return await axios({
      method: "post",
      url: process.env.AUTH_SERVICE + "/users/register",
      data: {
        username,
        password: "123456",
      },
    });
  } catch (e: any) {
    return {
      error: {
        code: e.response.status,
        message: e.response.statusText,
      },
    };
  }
}

export async function getAccessToken() {
  const testUser1: boolean = await checkIfUserExists("TestUser1");
  const testUser2: boolean = await checkIfUserExists("TestUser2");
  if (!testUser1) {
    await register("TestUser1");
  }

  if (!testUser2) {
    await register("TestUser2");
  }
  return await login();
}
