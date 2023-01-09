import isTriangle from './main';
import { describe, it, expect } from 'vitest';

describe('#isTriangle', () => {
  it('True if sides < sum', () => {
    expect(isTriangle(1, 2, 2)).toBe(true);
  });
  it('False if sides > sum', () => {
    expect(isTriangle(7, 2, 2)).toBe(false);
  });
  it('False if sides are 0', () => {
    expect(isTriangle(0, 0, 0)).toBe(false);
  });
});
