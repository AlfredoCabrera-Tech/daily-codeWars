import { describe, it, expect } from "vitest";
import wordsToMarks from "./main";

describe("#wordsToMarks", () => {
  it("Returns exactly what codewars needs", () => {
    expect(wordsToMarks("attitude")).toBe(100);
    expect(wordsToMarks("friends")).toBe(75);
    expect(wordsToMarks("family")).toBe(66);
    expect(wordsToMarks("selfness")).toBe(99);
    expect(wordsToMarks("knowledge")).toBe(96);
  });
});
