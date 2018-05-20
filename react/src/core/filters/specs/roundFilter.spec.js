import roundFilter from '../roundFilter';

describe('Filter: round', () => {
  const pi = 3.14159265359;

  it('should return if value is empty', () => {
    expect(roundFilter()).toBeUndefined();
  });

  it('should return rounded value with 2 decimal by default', () => {
    expect(roundFilter(pi)).toBe('3.14');
  });

  it('should return rounded value with n decimal', () => {
    expect(roundFilter(pi, 0)).toBe('3');
    expect(roundFilter(pi, 6)).toBe('3.141593');
  });
});
