import { describe, it, expect } from "vitest";
import wave from "./main";

describe("#wave", () => {
  it("", () => {
    expect(wave("hello")).toEqual([
      "Hello",
      "hEllo",
      "heLlo",
      "helLo",
      "hellO",
    ]);
  });

  it("", () => {
    expect(wave("codewars")).toEqual([
      "Codewars",
      "cOdewars",
      "coDewars",
      "codEwars",
      "codeWars",
      "codewArs",
      "codewaRs",
      "codewarS",
    ]);
  });

  it("", () => {
    expect(wave("two words")).toEqual([
      "Two words",
      "tWo words",
      "twO words",
      "two Words",
      "two wOrds",
      "two woRds",
      "two worDs",
      "two wordS",
    ]);
  });

  it("", () => {
    expect(wave(" gap ")).toEqual([" Gap ", " gAp ", " gaP "]);
  });
});
