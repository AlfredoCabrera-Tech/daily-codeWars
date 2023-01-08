import isSortedAndHow from './main';
import { describe, expect, it } from 'vitest';

describe('#isSortedAndHow', () => {
  it('It is sorted in an ascending manner', () => {
    expect(isSortedAndHow([1, 2])).toStrictEqual('yes, ascending');
  });

  it('It is sorted in an ascending manner', () => {
    expect(isSortedAndHow([15, 7, 3, -8])).toStrictEqual('yes, descending');
  });

  it("It's not sorted", () => {
    expect(isSortedAndHow([4, 2, 30])).toStrictEqual('no');
  });
});
