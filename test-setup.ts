/** @type {import('ts-jest').JestConfigWithTsJest} */
// import '@types/jest';
import { prisma } from "./client";
import { jest } from "@jest/globals";

global.jest = jest;

afterAll(async () => {
  await prisma.$disconnect();
});