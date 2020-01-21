const { sum, mul } = require("../src/sketch");

test("add 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("mul 3+4 to equal 12", () => {
  expect(mul(3, 4)).toBe(12);
});
