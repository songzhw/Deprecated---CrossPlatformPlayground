module.exports = {
  verbose: true,
  preset: "react-native",
  testURL: "http://localhost/",
  "moduleFileExtensions": [
    "ts", "tsx", "js"
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/jest.transform.js",
    "\\.(ts|tsx)$": "ts-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/?!(react-navigation)"
  ],
  "testRegex": "/__tests__/.*\\.(ts|tsx|js)$",
  "setupFilesAfterEnv": ["<rootDir>/enzyme.setup.js"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "jsdom"
};
