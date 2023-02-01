import { describe, it, expect } from "vitest";
import noOdds from "./main";

describe("#noOdds", () => {
  it("CodeWars test 1", () => {
    expect(noOdds([0, 1])).toEqual([0]);
  });

  it("CodeWars test 2", () => {
    expect(noOdds([0, 1, 2, 3])).toEqual([0, 2]);
  });
});
