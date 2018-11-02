/* jshint esversion:6 */

describe("First Test!", () => {
  it("should send positive vibes", () => {
    expect(Boolean("Love")).toBe(true);
  });
});

describe("Second Test!", () => {
  it ("should fail beautifully!", () => {
    expect(false).toBe(true);
  });
});