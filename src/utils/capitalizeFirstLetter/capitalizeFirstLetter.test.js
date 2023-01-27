import capitalizeFirstLetter from ".";

describe("capitalizeFirstLetter", () => {
  it("capitalize first letter correctly", () => {
    expect(capitalizeFirstLetter("budapest")).toBe("Budapest");
  });
  it("returns undefined to undefined", () => {
    expect(capitalizeFirstLetter()).toBeUndefined();
  });
  it("returns undefined for not string value", () => {
    expect(capitalizeFirstLetter(1)).toBeUndefined();
  });
});
