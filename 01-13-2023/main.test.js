import { describe, it, expect } from "vitest";
import getSize from "./main";

describe("#getSize", () => {
  it("", () => {
    expect(getSize(4, 2, 6)).toEqual([88, 48]);
  });

  it("", () => {
    expect(getSize(10, 10, 10)).toEqual([600, 1000]);
  });

  it("", () => {
    expect(getSize(4, 2, 6)[0]).toEqual(88);
  });

  it("", () => {
    expect(getSize(4, 2, 6)[1]).toEqual(48);
  });
});
