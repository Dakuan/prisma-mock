import { prisma } from "./client";
import { generate } from "./generate";

jest.mock("./generate", () => ({ generate: jest.fn() }));

test("it should build the user", async () => {
  (generate as jest.Mock).mockReturnValue("123");
  const user = await prisma.user.build("dom", "dommer");

  expect(user.name).toBe("dom dommer");
  expect(user.code).toBe("123");
});
