// Importing inside CommonJS Module via Object Destructuring
const { sum, diff, product } = require('./calculator');

console.log(sum(3, 2));

describe("Calculator tests", () => {
  test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("3 + 2 = 5", () => {
    expect(sum(3, 2)).toBe(5);
  });
});

// Normal tests.... without "describe"
test("Addition Test", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Subtraction Test", () => {
  let result = diff(33, 8);
  expect(result).toBe(25);
});

test("Multiplication Test", () => {
  expect(product(3, 9)).toBe(27);
});