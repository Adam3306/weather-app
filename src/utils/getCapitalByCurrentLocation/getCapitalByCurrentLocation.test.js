import getCapitalByCurrentLocation from ".";

describe("getCapitalByCurrentLocation", () => {
  it("should return the correct capital", () => {
    expect(getCapitalByCurrentLocation()).toBe("Budapest");
  });
});
