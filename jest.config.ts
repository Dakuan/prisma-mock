module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
      "@src/(.*)": "<rootDir>/src/$1",
    },
    testPathIgnorePatterns: ["./dist"],
    setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
    transform: {
      // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
      // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
      "^.+\\.[tj]sx?$": [
        "ts-jest",
        {
          useESM: true,
        },
      ],
    },
  };
  