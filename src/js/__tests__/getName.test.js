import { getName } from "../basic";

describe("getName", () => {
  test("shot name", () => {
    expect(() => {
      getName("O");
    }).toThrow();
  });
  test("long name", () => {
    expect(() => {
      getName("O1234567891011");
    }).toThrow();
  });
  test("normal name", () => {
    const result = getName("Oleg");
    expect(result).toBe("Oleg");
  });
});
