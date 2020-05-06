import { getType } from "../basic";

describe("getType", () => {
  test("Incorrent type", () => {
    expect(() => {
      getType("Oleg");
    }).toThrow();
  });
  test("Corrent type", () => {
    const result = getType("Undead");
    expect(result).toBe("Undead");
  });
});
