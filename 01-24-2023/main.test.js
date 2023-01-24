import { describe, it, expect } from "vitest";
import getRealFloor from "./main";

describe("#getRealFloor", () => {
  it("CodeWars test 1", () => {
    expect(getRealFloor(1)).toBe(0);
  });

  it("CodeWars test 2", () => {
    expect(getRealFloor(5)).toBe(4);
  });

  it("CodeWars test 3", () => {
    expect(getRealFloor(15)).toBe(13);
  });

  it("CodeWars test 4", () => {
    expect(getRealFloor(-2)).toBe(-2);
  });
});
