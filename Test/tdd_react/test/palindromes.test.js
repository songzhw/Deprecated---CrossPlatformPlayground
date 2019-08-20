const { palindromes } = require("../src/palindromes");

describe("回文字符串", () => {
  test("happy path", () => {
    const result = palindromes("madam");
    expect(result).toBe(true);
  });
});