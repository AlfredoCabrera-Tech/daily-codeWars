import { describe, it, expect } from "vitest";
import digitize from "./main";

describe("#digitize", () => {
  it("", () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
  });

  it("", () => {
    expect(digitize(0)).toEqual([0]);
  });
});
