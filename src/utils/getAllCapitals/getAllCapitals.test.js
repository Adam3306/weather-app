import getAllCapitals from ".";
import capitals from "./mocks/capitals";
describe("getAllCapitals", () => {
  it("returns the correct data", () => {
    expect(getAllCapitals()).toStrictEqual(capitals);
  });
});
