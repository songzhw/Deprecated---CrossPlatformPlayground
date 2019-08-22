module.exports = {
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/enzyme.setup.js"],
  setupFiles: ["<rootDir>/jest.config.js"],
  testEnvironment: "jsdom",
};
