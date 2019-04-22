import { add } from "../utils";

describe("utils test", () => {
  test("test add(a,b)", () => {
    const expected = 3;
    const actual = add(1, 2);
    expect(actual).toBe(expected);
  });
});
