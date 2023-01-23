import { describe, it, expect } from "vitest";
import predictAge from "./main";

describe("#predictAge", () => {
  it("Does as CodeWars asks", () => {
    expect(predictAge(65, 60, 75, 55, 60, 63, 64, 45)).toBe(86);
  });
});
