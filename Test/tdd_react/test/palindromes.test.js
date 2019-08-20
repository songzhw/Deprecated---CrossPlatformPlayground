describe("回文字符串", () => {
  test("happy path", () => {
    const result = palindromes("ABA");
    expect(result).toBe(true);
  });
});