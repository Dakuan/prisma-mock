import { greeter } from "./greeter";
import { generate } from "./generate";

jest.mock("./generate", () => ({ generate: jest.fn() }));

test("it should say henlo", () => {
  (generate as jest.Mock).mockReturnValue("123");
  expect(greeter()).toBe("HENLO 123");
});
