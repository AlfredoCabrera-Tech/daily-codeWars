import { describe, it, expect } from "vitest";
import mxdiflg from "./main";

describe("#mxdiflg", () => {
  it("", () => {
    const s1 = [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ];
    const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    expect(mxdiflg(s1, s2)).toBe(13);
  });
});
