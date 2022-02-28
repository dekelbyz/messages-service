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
    "./defaultTimeout.js",
  ],
  setupFiles: ["dotenv/config"],

  globalSetup: "./jest.setup.ts",
};
export default config;
