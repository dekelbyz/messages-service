import axios from "axios";

/**
 * Sends (via headers) the jwt to our auth micro-service
 * which checks wether user is authorized to go on.
 */
export async function validate(token: string) {
  console.log(token);

  try {
    const authRequest = await axios({
      method: "get",
      url: process.env.AUTH_SERVICE + "/auth/validate",
      headers: {
        authorization: token,
      },
    });
    return authRequest.data;
  } catch (e: any) {
    return {
      error: {
        code: e.response.status,
        message: e.response.statusText,
      },
    };
  }
}

// TODO: RETURN A BOOLEAN

/**By addressing our auth micro-service, this function can tell us
 * wether user exists or not.
 */
export async function checkIfUserExists(username: string) {
  try {
    const result = await axios.get(`http://localhost:3000/users/${username}`);
    return result.data;
  } catch (e) {
    return e;
  }
}
