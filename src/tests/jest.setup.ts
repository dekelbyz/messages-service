import { getAccessToken } from "./auth-flow";
import { config } from "dotenv";
config();
async function setup() {
  process.env.TEST_ACCESS_TOKEN = await getAccessToken();
}
export default setup;
