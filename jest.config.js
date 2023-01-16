module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  projects: [
    "./project-1/jest.config.js",
  ],
  rootDir: ".",
  // roots: [
  // "project-1",
  // "project-2",
  // ],
};
