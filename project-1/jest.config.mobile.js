module.exports = {
  testMatch: [
    "**/test/mobile/**/*.js",
    "**/test/common/**/*.js",
  ],
  setupFilesAfterEnv: ["./test/jest.setup.mobile.js"],
};
