const sharedConfig = require("../jest.config");

module.exports = {
  ...sharedConfig,

  // Run tests from one or more projects
  projects: [
    "./project-1/jest.config.mobile.js",
    "./project-1/jest.config.web.js",
  ],
};
