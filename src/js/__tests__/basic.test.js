import Character from "../basic";

describe("Character", () => {
  test("new character", () => {
    const result = new Character("Oleg", "Bowman");
    const expected = {
      name: "Oleg",
      type: "Bowman",
      health: 100,
      level: 1,
      defense: 25,
      attack: 25,
    };
    expect(result).toEqual(expected);
  });
  test("new character", () => {
    const result = new Character("Oleg", "Zombie");
    const expected = {
      name: "Oleg",
      type: "Zombie",
      health: 100,
      level: 1,
      defense: 10,
      attack: 40,
    };
    expect(result).toEqual(expected);
  });
});
