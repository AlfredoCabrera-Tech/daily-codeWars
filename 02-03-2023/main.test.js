import { describe, it, expect } from "vitest";
import factorial from "./main";

describe("#factorial", () => {
  it("CodeWars test 1", () => {
    expect(factorial(0)).toBe(1);
  });

  it("CodeWars test 2", () => {
    expect(factorial(1)).toBe(1);
  });

  it("CodeWars test 3", () => {
    expect(factorial(4)).toBe(24);
  });

  it("CodeWars test 4", () => {
    expect(factorial(7)).toBe(5040);
  });

  it("CodeWars test 5", () => {
    expect(factorial(17)).toBe(355687428096000);
  });
});
