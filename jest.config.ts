import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Adding this line solved the issue
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: [
    // NOT setupFiles
    "./tests/defaultTimeout.js",
  ],
  setupFiles: ["dotenv/config"],
};
export default config;
