import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: [
    "<rootDir>/support/setupTests.js"
  ],
};

export default config;