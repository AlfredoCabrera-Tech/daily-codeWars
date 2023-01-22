import { describe, it, expect } from "vitest";
import { enough } from "./main";

describe("#enough", () => {
  it("Does as Codewars says", () => {
    expect(enough(10, 5, 5)).toBe(0);
    expect(enough(100, 60, 50)).toBe(10);
    expect(enough(20, 5, 5)).toBe(0);
  });
});
