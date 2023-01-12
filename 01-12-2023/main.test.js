import { describe, it, expect } from 'vitest';
import sumDigits from './main';

describe('#sumDigits', () => {
  it('Testing for fixed tests', () => {
    expect(sumDigits(10)).toBe(1);
    expect(sumDigits(99)).toBe(18);
    expect(sumDigits(-32)).toBe(5);
  });
});
