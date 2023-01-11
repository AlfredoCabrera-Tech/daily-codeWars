import { describe, it, expect } from 'vitest';
import sortArray from './main';

describe('#sortArray', () => {
  it('Returns blank if array blank', () => {
    expect(sortArray([])).toEqual([]);
  });

  it('Sorts only odds', () => {
    expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
  });

  it("Won't break with zeroes", () => {
    expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
  });
});
