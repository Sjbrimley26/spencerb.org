/* jshint esversion:6 */
require("dotenv").config();

describe("First Test!", () => {
  it("should send positive vibes", () => {
    console.log(process.env.AWS_ACCESS_KEY_ID);
    expect(Boolean("Love")).toBe(true);
  });
});
