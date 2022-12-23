/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: ["node_modules", "routes.ts", "index.ts", ".model.ts", ".tableDef.ts", "middleware.ts"],
}
